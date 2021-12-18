import {
  getConnectionByIdService,
  getAllConnectionService,
} from "./services/ConnectionServices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import Connection from "./models/Connection";
import axios from "axios";
// import { getEmpById, getAllEmps } from "../redux/ConnectionSlice";

import { getConnectionById, getAllConnection } from "../redux/ConnectionSlice";
import { Store } from "redux";
import { Provider } from "react";

const ConnectionData = () => {
  const [connection, setConnection] = useState(new Connection());
  const [newConnectionObj, setNewConnectionObj] = useState(new Connection());
  const [displayConnectionObj, setDisplayConnectionObj] = useState(
    new Connection()
  );
  // const [connectionList, setConnectionList] = useState([]);
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

  const submitGetConnectionById = (evt) => {
    evt.preventDefault();
    console.log("submitGetConnectionById");
    getConnectionByIdService(connectionId)
      .then((response) => {
        dispatch(getConnectionById(response.data));
      })
      .catch(() => {
        alert(`Connection with ${connectionId} not found.`);
      });
    console.log(Object.keys(connectionList));
    setConnectionId("");
  };

  /*add connection */
  const submitAddConnection = (evt) => {
    evt.preventDefault();
    axios
      .post(`http://localhost:8082/connection/addConnection`, newConnectionObj)
      .then((response) => {
        setDisplayConnectionObj(response.data);
        alert("connection added successfully.");
        setNewConnectionObj({
          applicationDate: "",
          connectionDate: "",
          connectionType: "",
          connectionStatus: "",
        });
      })
      .catch(() => {
        alert("Connection could not be added.");
      });
  };

  const submitGetAllConnection = (evt) => {
    evt.preventDefault();
    console.log("submitGetAllConnection");
    getAllConnectionService()
      .then((response) => {
        dispatch(getAllConnection(response.data));
      })
      .catch(() => {
        alert(`Something is wrong!`);
      });
  };

  return (
    <div className="container">
      <h1 className="display-4 text-primary mt-3 mb-3">Connection Component</h1>
      <p>
        Fetch data from backend, store it in redux store and get it to component
      </p>
      <div className="col-11 border border-light shadow p-3 mb-5 bg-white">
        <p>Find connection by connectionid</p>
        <form
          className="form form-group form-primary"
          onSubmit={submitGetConnectionById}
        >
          <input
            className="form-control mt-3"
            type="number"
            id="connectionId"
            name="connectionId"
            value={connectionId}
            onChange={handleConnection}
            placeholder="Enter connection Id to search"
            autoFocus
            required
          />
          <input
            className="form-control mt-3 btn btn-primary"
            type="submit"
            value="Find Connection"
          />
        </form>
        <p>
          Data from store: {connectionDataFromStore.connectionId}
          {"  "}
          {connectionDataFromStore.consumerNumber}
          {"  "}
          {connectionDataFromStore.applicationDate}
          {"  "}
          {connectionDataFromStore.connectionDate}
          {"  "}
          {connectionDataFromStore.connectionType}
          {"  "}
          {connectionDataFromStore.connectionStatus}{" "}
          {/* {connectionDataFromStore.Address} */}
        </p>
      </div>
      <p>------------address registration------</p>
      {/* <form>
        <div className="col-11 border border-light shadow p-3 mb-5 bg-white">
          <p>Add New Connection</p>

          <div id="addNewEmpDiv">
            <p>----------------------------</p>
            <div>
              <p>Add connection address</p>
              <input
                type="text"
                id="buildingName"
                name="buildingName"
                value={newConnectionObj.buildingName}
                onChange={handleAddConnection}
                placeholder="building name"
              />
              <input
                type="text"
                id="districtName"
                name="districtName"
                value={newConnectionObj.districtName}
                onChange={handleAddConnection}
                placeholder="district name"
              />
              <input
                type="number"
                id="houseNumber"
                name="houseNumber"
                value={newConnectionObj.houseNumber}
                onChange={handleAddConnection}
                placeholder="flat or house name"
              />
              <input
                type="text"
                id="landmark"
                name="landmark"
                value={newConnectionObj.landmark}
                onChange={handleAddConnection}
                placeholder="landmark"
              />
              <input
                type="number"
                id="pincode"
                name="pincode"
                value={newConnectionObj.pincode}
                onChange={handleAddConnection}
                placeholder="pincode"
              />
              <input
                type="text"
                id="state"
                name="state"
                value={newConnectionObj.state}
                onChange={handleAddConnection}
                placeholder="state"
              />
              <input
                type="text"
                id="taluka"
                name="taluka"
                value={newConnectionObj.taluka}
                onChange={handleAddConnection}
                placeholder="taluka"
              />
              <input
                type="text"
                id="villageName"
                name="villageName"
                value={newConnectionObj.villageName}
                onChange={handleAddConnection}
                placeholder="village name"
              />
            </div>
            <p>-----------------------------------</p>
            <div>
              <p>Add customer details</p>
              <input
                type="number"
                id="aadharNumber"
                name="aadharNumber"
                value={newConnectionObj.aadharNumber}
                onChange={handleAddConnection}
                placeholder="aadhar number"
              />
              <input
                type="text"
                id="email"
                name="email"
                value={newConnectionObj.email}
                onChange={handleAddConnection}
                placeholder="email"
              />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={newConnectionObj.firstName}
                onChange={handleAddConnection}
                placeholder="First Name"
              />

              <input
                type="text"
                id="lastName"
                name="lastName"
                value={newConnectionObj.lastName}
                onChange={handleAddConnection}
                placeholder="last Name"
              />
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={newConnectionObj.middleName}
                onChange={handleAddConnection}
                placeholder="middle name"
              />
              <input
                type="text"
                id="gender"
                name="gender"
                value={newConnectionObj.gender}
                onChange={handleAddConnection}
                placeholder="gender"
              />
              <input
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                value={newConnectionObj.mobileNumber}
                onChange={handleAddConnection}
                placeholder="mobile Number"
              />
              <p>----------------</p>
              <div>
                <p>Connection details</p>
                <input
                  type="number"
                  id="connectionDate"
                  name="connectionDate"
                  value={newConnectionObj.connectionDate}
                  onChange={handleAddConnection}
                  placeholder="connection date"
                />
                <input
                  type="text"
                  id="connectionType"
                  name="connectionType"
                  value={newConnectionObj.connectionType}
                  onChange={handleAddConnection}
                  placeholder="connection Type"
                />
                <input
                  type="text"
                  id="connnectionStatus"
                  name="connnectionStatus"
                  value={newConnectionObj.connnectionStatus}
                  onChange={handleAddConnection}
                  placeholder="connnection status"
                />
              </div>
              <input
                className="form-control mt-3 btn btn-primary"
                type="submit"
                value="Add Connection"
                onClick={submitAddConnection}
              />
            </div>

            <p>
              New Employee Data: {displayConnectionObj.connectionId}{" "}
              {displayConnectionObj.connectionType}{" "}
              {displayConnectionObj.connectionDate}{" "}
              {displayConnectionObj.applicationDate}{" "}
              {displayConnectionObj.connectionStatus}
            </p>
          </div>
        </div>
      </form> */}

      {/* <p>------------------------</p>{" "} */}
      <div className="container">
        <div className="col-14 border border-light shadow p-3 mb-5 bg-white">
          <p>Show all connection</p>
          <div>
            <form className="form form-group form-primary">
              <input
                className="mt-3 btn btn-primary btn-block"
                type="button"
                onClick={submitGetAllConnection}
                value="Find All Connection"
              />
            </form>
          </div>
          <table className=" table table-light table-striped ">
            <thead>
              <tr>
                <th>connectionId</th>
                <th>consumerNumber</th>
                <th>applicationDate</th>
                <th>connectionDate</th>
                <th>connectionType</th>
                <th>connectionStatus</th>
              </tr>
            </thead>
            <tbody>
              {connectionList.map((connection, k) => {
                return (
                  <tr k={k}>
                    {" "}
                    <td>{connection.connectionId}</td>{" "}
                    <td>{connection.consumerNumber}</td>{" "}
                    <td>{connection.applicationDate}</td>
                    <td>{connection.connectionDate}</td>{" "}
                    <td>{connection.connectionType}</td>{" "}
                    <td>{connection.connectionStatus}</td>{" "}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p>----------------------Demo table--------</p>
      <div class="container register-form">
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
                    id=" buildingName"
                    name=" buildingName"
                    className="form-control"
                    placeholder="Building Name *"
                    onChange={handleAddConnection}
                    value={newConnectionObj.buildingName}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="landmark"
                    name="landmark"
                    className="form-control"
                    placeholder="Landmark*"
                    onChange={handleAddConnection}
                    value={newConnectionObj.landmark}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    id=" flatOrHouseNumber"
                    name="flatOrHouseNumber"
                    className="form-control"
                    placeholder="FlatOrHouse Number*"
                    onChange={handleAddConnection}
                    value={newConnectionObj.flatOrHouseNumber}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
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
                    id=" pincode"
                    name=" pincode"
                    className="form-control"
                    placeholder="Pincode*"
                    onChange={handleAddConnection}
                    value={newConnectionObj.pincode}
                  />
                </div>
                {/* <div className="form-group">
                  <input
                    type="text"
                    id="connectionType"
                    name="connectionType"
                    className="form-control"
                    placeholder="Connection Type *"
                    onChange={handleAddConnection}
                    value={newConnectionObj.connectionType}
                  />
                </div> */}
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
                    type="text"
                    id=" applicationDate"
                    name=" applicationDate"
                    className="form-control"
                    placeholder="Application Date *"
                    onChange={handleAddConnection}
                    value={newConnectionObj.applicationDate}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="connectionDate"
                    name="connectionDate"
                    className="form-control"
                    placeholder="Connection Date *"
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
      <p>--------------------------------</p>
      <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
        <p>Some other functionality</p>
      </div>
    </div>
  );
};
export default ConnectionData;
