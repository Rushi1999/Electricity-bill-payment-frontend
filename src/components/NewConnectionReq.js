import {
  getConnectionByIdService,
  getAllConnectionService,
} from "./services/ConnectionServices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import Connection from "./models/Connection";
import axios from "axios";

import { getConnectionById, getAllConnection } from "../redux/ConnectionSlice";
import { Store } from "redux";
import { Provider } from "react";

const ConnectionData = () => {
  const [connection, setConnection] = useState(new Connection());
  const [newConnectionObj, setNewConnectionObj] = useState(new Connection());
  const [displayConnectionObj, setDisplayConnectionObj] = useState(
    new Connection()
  );

  const [connectionId, setConnectionId] = useState("");

  /*original */
  const dispatch = useDispatch();

  const connectionDataFromStore = useSelector(
    (state) => state.connection.connectionState
  );
  const connectionList = useSelector(
    (state) => state.connection.connectionList
  );

  const handleConnection = (e) => {
    console.log("handleConnection");
    setConnectionId(e.target.value);
  };

  const handleAddConnection = (e) => {
    console.log(e.target.value);
    setNewConnectionObj({
      ...newConnectionObj,
      [e.target.name]: e.target.value,
    });
  };

  // const submitGetConnectionById = (evt) => {
  //   evt.preventDefault();
  //   console.log("submitGetConnectionById");
  //   getConnectionByIdService(connectionId)
  //     .then((response) => {
  //       dispatch(getConnectionById(response.data));
  //     })
  //     .catch(() => {
  //       alert(`Connection with ${connectionId} not found.`);
  //     });
  //   console.log(Object.keys(connectionList));
  //   setConnectionId("");
  // };

  /*add connection */
  const submitAddConnection = (evt) => {
    evt.preventDefault();
    axios
      .post(`http://localhost:8082/connection/addConnection`, newConnectionObj)
      .then((response) => {
        setDisplayConnectionObj(response.data);
        alert("connection added successfully.");
        setNewConnectionObj({
          flatOrHouseNumber: "",
          buildingName: "",
          landmark: "",
          villageName: "",
          taluka: "",
          districtName: "",
          state: "",
          pincode: "",
          customerId: "",
          connectionType: "",
          applicationDate: "",
          connectionDate: "",
          connectionStatus: "",
        });
      })
      .catch(() => {
        alert("Please check all mandatory filed");
      });
  };

  // const submitGetAllConnection = (evt) => {
  //   evt.preventDefault();
  //   console.log("submitGetAllConnection");
  //   getAllConnectionService()
  //     .then((response) => {
  //       dispatch(getAllConnection(response.data));
  //     })
  //     .catch(() => {
  //       alert(`Something is wrong!`);
  //     });
  // };

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
                    id="buildingName"
                    name="buildingName"
                    className="form-control"
                    placeholder="Building Name *"
                    onChange={handleAddConnection}
                    value={newConnectionObj.buildingName}
                    required
                    autoFocus
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    required
                    id="landmark"
                    name="landmark"
                    className="form-control"
                    placeholder="Landmark*"
                    required
                    onChange={handleAddConnection}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    required
                    id=" flatOrHouseNumber"
                    name="flatOrHouseNumber"
                    className="form-control"
                    placeholder="FlatOrHouse Number*"
                    required
                    onChange={handleAddConnection}
                    value={newConnectionObj.flatOrHouseNumber}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    required
                    id="villageName"
                    name="villageName"
                    className="form-control"
                    placeholder="village Name *"
                    onChange={handleAddConnection}
                    value={newConnectionObj.villageName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="taluka"
                    required
                    name="taluka"
                    className="form-control"
                    placeholder="Taluka *"
                    onChange={handleAddConnection}
                    value={newConnectionObj.taluka}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    required
                    id="districtName"
                    name="districtName"
                    className="form-control"
                    placeholder="District Name *"
                    onChange={handleAddConnection}
                    value={newConnectionObj.districtName}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    required
                    id="state"
                    name="state"
                    className="form-control"
                    placeholder="State Name *"
                    onChange={handleAddConnection}
                    value={newConnectionObj.state}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    maxlength="6"
                    required
                    id="pincode"
                    name="pincode"
                    className="form-control"
                    placeholder="Pincode*"
                    onChange={handleAddConnection}
                    value={newConnectionObj.pincode}
                  />
                </div>

                <div class="form-group">
                  <select
                    class="form-control mb-3"
                    name="connectionType"
                    id="connectionType"
                    onChange={handleAddConnection}
                  >
                    <option value="connectionType">
                      Select Connection Type
                    </option>
                    <option value="NON_INDUSTRIAL">NON_INDUSTRIAL</option>
                    <option value="INDUSTRIAL">INDUSTRIAL</option>
                    <option value="AGRICULTURAL">AGRICULTURAL</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div className="form-group">
                  <input
                    type="date"
                    id="applicationDate"
                    min="2021-12-21"
                    name="applicationDate"
                    className="form-control"
                    placeholder="Application Date *"
                    onChange={handleAddConnection}
                    value={newConnectionObj.applicationDate}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    min="2021-12-21"
                    id="connectionDate"
                    name="connectionDate"
                    className="form-control"
                    placeholder="Connection Date*"
                    onChange={handleAddConnection}
                    value={newConnectionObj.connectionDate}
                  />
                </div>
                <div class="form-group">
                  <select
                    class="form-control mb-3"
                    name="connectionStatus"
                    id="connectionStatus"
                    onChange={handleAddConnection}
                  >
                    <option value="connectionStatus">
                      Select Connection Status
                    </option>
                    <option value="active">ACTIVE</option>
                    <option value="inactive">INACTIVE</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btnSubmit   btn btn-primary"
              value="Add Connection"
              onClick={submitAddConnection}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConnectionData;
