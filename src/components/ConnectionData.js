import {
  getConnectionByIdService,
  getAllConnectionService,
} from "./services/ConnectionServices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div class="container-fluid p-4">
      <h1 class=" text-primary mt-3 mb-3 table-text">Connection Table</h1>
      <p>Below table contain all customer connection details</p>
      <div class="row">
        <div className="col-2 mr-2 border border-light shadow p-3 mb-5 bg-white">
          <p className="text-primary mt-3 mb-3">
            Find connection by connectionid
          </p>
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
              placeholder="Enter connection Id..."
              autoFocus
              required
            />
            <input
              class="form-control mt-3 btn-sm small btn btn-primary"
              type="submit"
              value="Find Connection"
              data-toggle="modal"
              data-target="#exampleModal"
            />
          </form>

          <div class="modal" tabindex="-1" id="exampleModal" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Connection details</h5>
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
                  {/* <p>
                    {connectionDataFromStore.connectionId}
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
                  </p> */}
                  <table className=" table table-light table-striped ">
                    <thead>
                      <tr>
                        <th>consumer Number</th>
                        {/* <th>Number</th> */}
                        <th>connection Date</th>
                        <th>connection Type</th>
                        {/* <th>connectionType</th>
                        <th>Pincode</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {" "}
                        <td>{connectionDataFromStore.connectionId}</td>{" "}
                        {/* <td>{connectionDataFromStore.consumerNumber}</td> */}
                        <td>{connectionDataFromStore.connectionDate}</td>{" "}
                        <td>{connectionDataFromStore.connectionType}</td>{" "}
                        {/* <td>{connectionDataFromStore.pincode}</td>{" "} */}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  {/* <button type="button" class="btn btn-primary">
                    Save changes
                  </button> */}
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

        {/* <div className="container "> */}

        <div className="col-9 border border-light shadow p-3 mb-5 bg-white">
          <button
            type="button"
            id="OnHoverText"
            class="btn btn-2 btn-link showall"
            onClick={submitGetAllConnection}
            value="Find All Connection"
          >
            Show All Connections
          </button>
          <table className=" table table-light table-striped ">
            <thead>
              <tr>
                <th>connectionId</th>
                <th>consumerNumber</th>
                <th>applicationDate</th>
                <th>connectionDate</th>
                <th>connectionType</th>
                <th>connectionStatus</th>
                <th>City</th>
                <th>Pincode</th>
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
                    <td>{connection.villageName}</td>{" "}
                    <td>{connection.pincode}</td>{" "}
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
export default ConnectionData;
