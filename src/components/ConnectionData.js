// import { getEmpByIdService, getAllEmpsService, } from "./services/ConnectionServices";
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
    console.log(" submitGetConnectionById");
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
      .post(`http://localhost:8082/connection/addemp`, newConnectionObj)
      .then((response) => {
        setDisplayConnectionObj(response.data);
        alert("Employee added successfully.");
        setNewConnectionObj({ firstName: "", salary: "" });
      })
      .catch(() => {
        alert("Employee could not be added.");
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
          Data from store: {connectionDataFromStore.connectionId}{" "}
          {connectionDataFromStore.connectionType}{" "}
          {connectionDataFromStore.customerId}{" "}
          {connectionDataFromStore.applicationDate}{" "}
          {connectionDataFromStore.connectionDate}{" "}
          {connectionDataFromStore.connectionStatus}{" "}
          {connectionDataFromStore.Address}
          {/* {customerId}
          applicationDate; connectionDate; connectionStatus; */}
        </p>
      </div>
      <form>
        <div className="col-11 border border-light shadow p-3 mb-5 bg-white">
          <p>Add New Connection</p>
          {/* <form onSubmit={submitAddEmp}> */}
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
                // type="button"
                value="Add Connection"
                onClick={submitAddConnection}
              />
            </div>
            {/* </form> */}
            <p>
              New Employee Data: {displayConnectionObj.connectionId}{" "}
              {displayConnectionObj.connectionType}{" "}
              {displayConnectionObj.connectionDate}{" "}
              {displayConnectionObj.applicationDate}{" "}
              {displayConnectionObj.connectionStatus}
            </p>
          </div>
        </div>
      </form>
      {/* <p>------------------------</p>{" "} */}
      <div>
        <div className="col-11 border border-light shadow p-3 mb-5 bg-white">
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
          <table className="table table-light table-striped ">
            <thead>
              <tr>
                {/* <th>Eid</th>
                <th>Name</th>
                <th>Salary</th> */}

                <th>connection Id</th>
                <th>customerId</th>
                <th>applicationDate</th>
                <th>connectionDate</th>
                <th>connectionStatus</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {connectionList.map((connection, k) => {
                return (
                  <tr k={k}>
                    {" "}
                    <td>{connection.connectionId}</td>{" "}
                    <td>{connection.customerId}</td>{" "}
                    <td>{connection.applicationDate}</td>
                    <td>{connection.connectionDate}</td>{" "}
                    <td>{connection.connectionStatus}</td>{" "}
                    <td>{connection.Address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
        <p>Some other functionality</p>
      </div>
    </div>
  );
};
export default ConnectionData;
