import {
  getReadingByIdService,
  getAllReadingService,
} from "./services/ReadingService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Reading from "./models/Reading";
import axios from "axios";

import { getReadingById, getAllReading } from "../redux/ReadingSlice";
import { Store } from "redux";
import { Provider } from "react";

const ReadingData = () => {
  const [reading, setReading] = useState(new Reading());
  const [newReadingObj, setNewReadingObj] = useState(new Reading());
  const [displayReadingObj, setDisplayReadingObj] = useState(new Reading());

  const [readingId, setReadingId] = useState("");

  const dispatch = useDispatch();

  const readingDataFromStore = useSelector(
    (state) => state.reading.readingState
  );
  const readingList = useSelector((state) => state.reading.readingList);

  const handleReading = (e) => {
    console.log("handleReading");
    setReadingId(e.target.value);
  };

  const handleSubmitReading = (e) => {
    console.log(e.target.value);
    setNewReadingObj({
      ...newReadingObj,
      [e.target.name]: e.target.value,
    });
  };

  const submitGetReadingById = (evt) => {
    evt.preventDefault();
    console.log("submitGetReadingById");
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

  const SubmitReading = (evt) => {
    evt.preventDefault();
    axios
      .post(`http://localhost:8082/reading/SubmitReading`, newReadingObj)
      .then((response) => {
        setDisplayReadingObj(response.data);
        alert("reading added successfully.");
        setNewReadingObj({
          readingId: "",
          readingUnitsConsumed: "",
          readingPricePerUnits: "",
          readingDate: "",
        });
      })
      .catch(() => {
        alert("reading could not be added.");
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
    <div className="container-fluid p-4">
      <h1 className="text-primary mt-3 mb-3 table-text">Reading Table</h1>
      <p>Below table contain all customer reading details</p>
      <div class="row">
        <div className="col-2 mr-2 border border-light shadow p-3 mb-5 bg-white">
          <p className="text-primary mt-3 mb-3">Find reading by readingid</p>
          <form
            className="form form-group form-primary"
            onSubmit={submitGetReadingById}
          >
            <input
              className="form-control mt-3"
              type="number"
              id="readingId"
              name="readingId"
              value={readingId}
              onChange={handleReading}
              placeholder="Enter reading Id...."
              autoFocus
              required
            />
            <input
              class="form-control mt-3 btn-sm small btn btn-primary"
              type="submit"
              value="Find Reading"
              data-toggle="modal"
              data-target="#exampleModal"
            />
          </form>
          {/* <p>
            Data from store: {readingDataFromStore.readingId}{"  "}
            {readingDataFromStore.pricePerUnits}
            {readingDataFromStore.unitsConsumed}
            {readingDataFromStore.readingDate}
             </p> */}
          <div class="modal" tabindex="-1" id="exampleModal" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Reading details</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>
                    {/* Data from store: */}
                    {readingDataFromStore.readingId}
                    {"  "}
                    {readingDataFromStore.readingDate}
                    {"  "}
                    {readingDataFromStore.pricePerUnits}
                    {"  "}
                    {readingDataFromStore.unitsConsumed}
                    {"  "}
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-9 border border-light shadow p-3 mb-5 bg-white">
          <button
            type="button"
            id="OnHoverText"
            class="btn btn-2 btn-link showall"
            onClick={submitGetAllReading}
            value="Find All Reading"
            // type="button"
            // id="OnHoverText"
            // class="btn btn-2 btn-link showall"
            // onClick={submitGetAllReading}
            // value="Find All Reading"
          >
            Show All Readings
          </button>
          <table className=" table table-light table-striped ">
            <thead>
              <tr>
                <th>readingId</th>
                <th>pricePerUnits</th>
                <th>unitsConsumed</th>
                <th>readingDate</th>
              </tr>
            </thead>
            <tbody>
              {readingList.map((reading, k) => {
                return (
                  <tr k={k}>
                    {" "}
                    <td>{reading.readingId}</td>{" "}
                    <td>{reading.pricePerUnits}</td>{" "}
                    <td>{reading.unitsConsumed}</td>{" "}
                    <td>{reading.readingDate}</td>{" "}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
        <p>Some other functionality</p>
      </div> */}
    </div>
  );
};
export default ReadingData;
