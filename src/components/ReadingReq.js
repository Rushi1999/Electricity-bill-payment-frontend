import {
  getReadingByIdService,
  getAllReadingService,
} from "./services/ReadingService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import Reading from "./models/Reading";
import axios from "axios";
// import { getEmpById, getAllEmps } from "../redux/ConnectionSlice";

import { getReadingById, getAllReading } from "../redux/ReadingSlice";
import { Store } from "redux";
import { Provider } from "react";

const ReadingData = () => {
  const [reading, setReading] = useState(new Reading());
  const [newReadingObj, setNewReadingObj] = useState(new Reading());
  const [displayReadingObj, setDisplayReadingObj] = useState(new Reading());
  // const [connectionList, setConnectionList] = useState([]);
  const [readingId, setReadingId] = useState("");

  /*original */
  const dispatch = useDispatch();

  const readingDataFromStore = useSelector(
    (state) => state.reading.readingState
  );
  const readingList = useSelector((state) => state.reading.readingList);

  const handleReading = (e) => {
    console.log("handleReading");
    setReadingId(e.target.value);
  };

  const handleAddReading = (e) => {
    console.log(e.target.value);
    setNewReadingObj({
      ...newReadingObj,
      [e.target.name]: e.target.value,
    });
  };

  const submitGetReadingById = (evt) => {
    evt.preventDefault();
    console.log(" submitGetReadingById");
    getReadingByIdService(readingId)
      .then((response) => {
        dispatch(getReadingById(response.data));
      })
      .catch(() => {
        alert(`Reading with ${readingId} not found.`);
      });
    console.log(Object.keys(readingList));
    setReadingId("");
  };

  /*add connection */
  const submitAddReading = (evt) => {
    evt.preventDefault();
    axios
      .post(`http://localhost:8082/reading/addReading`, newReadingObj)
      .then((response) => {
        setDisplayReadingObj(response.data);
        alert("reading added successfully.");
        setNewReadingObj({
          readingId: "",
          readingDate: "",
          unitsConsumed: "",
          pricePerUnits: "",
        });
      })
      .catch(() => {
        alert("Reading could not be added.");
      });
  };

  const submitGetAllReading = (evt) => {
    evt.preventDefault();
    console.log("submitGetAllReading");
    getAllReadingService()
      .then((response) => {
        dispatch(getAllReading(response.data));
      })
      .catch(() => {
        alert(`Something is wrong!`);
      });
  };

  return (
    <div className="container">
      <div class="register-form">
        <div class="form">
          <div class="note">
            <p>This is a simpleRegister Form made using Boostrap.</p>
          </div>

          <div class="form-content">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    id="readingId"
                    name="readingId"
                    className="form-control"
                    placeholder="Reading Id *"
                    onChange={handleAddReading}
                    value={newReadingObj.readingId}
                  />
                </div>

                <div className="form-group">
                  <input
                    // type="text"
                    id="readingDate"
                    name="readingDate"
                    className="form-control"
                    placeholder="Reading Date*"
                    onChange={handleAddReading}
                    value={newReadingObj.readingDate}
                    type="date"
                    // min="2021-12-21"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="pricePerUnits"
                    name="pricePerUnits"
                    className="form-control"
                    placeholder="Unit price *"
                    onChange={handleAddReading}
                    value={newReadingObj.pricePerUnits}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    id="unitsConsumed"
                    name="unitsConsumed"
                    className="form-control"
                    placeholder="Units Consumed*"
                    onChange={handleAddReading}
                    value={newReadingObj.unitsConsumed}
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btnSubmit   btn btn-primary"
              value="Add Reading"
              onClick={submitAddReading}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReadingData;
