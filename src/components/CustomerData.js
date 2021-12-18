import { getCustomerByIdService } from "./services/CustomerService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCustomerById } from "../redux/CustomerSlice";

import { Store } from "redux";
import { Provider } from "react";

const CustomerData = () => {
  const [customerId, setCustomerId] = useState("");
  const dispatch = useDispatch();
  const customerDataFromStore = useSelector(
    (state) => state.customer.customerState
  );
  const customerList = useSelector((state) => state.customer.customerList);

  const handleCustomer = (e) => {
    console.log("handleCustomer");
    setCustomerId(e.target.value);
  };

  const submitGetCustomerById = (evt) => {
    evt.preventDefault();
    console.log("submitGetCustomerById");
    getCustomerByIdService(customerId)
      .then((response) => {
        dispatch(getCustomerById(response.data));
      })
      .catch(() => {
        alert(`Customer with ${customerId} not found.`);
      });
    console.log(Object.keys(customerList));
    setCustomerId("");
  };

  /*add connection */

  // const submitAddConnection = (evt) => {
  //   evt.preventDefault();
  //   axios
  //     .post(`http://localhost:8082/connection/addConnection`, newConnectionObj)
  //     .then((response) => {
  //       setDisplayConnectionObj(response.data);
  //       alert("connection added successfully.");
  //       setNewConnectionObj({
  //         applicationDate: "",
  //         connectionDate: "",
  //         connectionType: "",
  //         connectionStatus: "",
  //       });
  //     })
  //     .catch(() => {
  //       alert("Connection could not be added.");
  //     });
  //};

  return (
    <div className="container">
      <h1 className="display-4 text-primary mt-3 mb-3">Customer Component</h1>
      <p>
        Fetch data from backend, store it in redux store and get it to component
      </p>
      <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
        <p>Find customer by id</p>
        <form
          className="form form-group form-primary"
          onSubmit={submitGetCustomerById}
        >
          <input
            className="form-control mt-3"
            type="number"
            id="customerId"
            name="customerId"
            value={customerId}
            onChange={handleCustomer}
            placeholder="Enter customerId to search"
            autoFocus
            required
          />
          <input
            className="form-control mt-3 btn btn-primary"
            type="submit"
            value="Find Customer"
          />
        </form>
        <p>
          Data from store: {customerDataFromStore.customerId}{" "}
          {customerDataFromStore.firstName} {customerDataFromStore.lastName}
          {customerDataFromStore.middleName}
          {customerDataFromStore.email}
          {customerDataFromStore.gender}
          {customerDataFromStore.addharNumber}
          {customerDataFromStore.mobileNumber}
        </p>
      </div>
      <p>----------------------Demo table--------</p>
      <div class="container register-form">
        <div class="form">
          <div class="note">
            <p>This is a CustomerRegister Form made using Boostrap.</p>
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
                    // onChange={handleAddCustomer}
                    // value={newConnectionObj.buildingName}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="landmark"
                    name="landmark"
                    className="form-control"
                    placeholder="Landmark*"
                    // onChange={handleAddConnection}
                    // value={newConnectionObj.landmark}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    id=" flatOrHouseNumber"
                    name="flatOrHouseNumber"
                    className="form-control"
                    placeholder="FlatOrHouse Number*"
                    // onChange={handleAddConnection}
                    // value={newConnectionObj.flatOrHouseNumber}
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
                    // onChange={handleAddConnection}
                    // value={newConnectionObj.villageName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="taluka"
                    name="taluka"
                    className="form-control"
                    placeholder="Taluka *"
                    // onChange={handleAddConnection}
                    // value={newConnectionObj.taluka}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="districtName"
                    name="districtName"
                    className="form-control"
                    placeholder="District Name *"
                    // onChange={handleAddConnection}
                    // value={newConnectionObj.districtName}
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
                    // onChange={handleAddConnection}
                    // value={newConnectionObj.state}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    id=" pincode"
                    name=" pincode"
                    className="form-control"
                    placeholder="Pincode*"
                    // onChange={handleAddConnection}
                    // value={newConnectionObj.pincode}
                  />
                </div>

                <div class="form-group">
                  <select
                    class="form-control mb-3"
                    name="connectionType"
                    id="connectionType"
                    // onChange={handleAddConnection}
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
                    // onChange={handleAddConnection}
                    // value={newConnectionObj.applicationDate}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="connectionDate"
                    name="connectionDate"
                    className="form-control"
                    placeholder="Connection Date *"
                    // onChange={handleAddConnection}
                    // value={newConnectionObj.connectionDate}
                  />
                </div>
                <div class="form-group">
                  <select
                    class="form-control mb-3"
                    name="connectionStatus"
                    id="connectionStatus"
                    // onChange={handleAddConnection}
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
              // onClick={submitAddConnection}
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
export default CustomerData;

// import { getEmpById, getAllEmps } from "../redux/EmpSlice";

// // useDispatch - send data to store,  useSelector - fetch data from store
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { useState } from "react";
// // import DepData from "./DepData";
// import Employee from './models/Employee';
// // step 4 - use redux store and reducers in components

// const EmpData = (props) => {

//     // creating state is not required with redux
//     // const [variable, setVariable] = useState('');

//     const [emp, setEmp] = useState(new Employee());
//     const dispatch = useDispatch();

//     // this data is coming from store
//     // const empDataFromStore = useSelector((arg) => {return arg.nameOfTheState.data});
//     // const empDataFromStore = useSelector((arg) =>  arg.nameOfTheState.data );

//     const empDataFromStore = useSelector((state) => state.emp.empState);
//     const empList = useSelector((state) => state.emp.empList);

//     const handleEmp = (e) => {
//         console.log('handleEmp');
//         setEmp({
//             ...emp,
//             [e.target.name]: e.target.value
//         });
//     }

//     const submitGetEmpById = (evt) => {
//         evt.preventDefault();
//         console.log('submitGetEmpById');
//         axios.get(`emp/getempbyid/${emp.eid}`)
//             .then((response) => {
//                 dispatch(getEmpById(response.data));
//                 setEmp({ eid: '' });
//             })
//             .catch(() => {
//                 alert("Employee not found.");
//                 setEmp({ eid: '' });
//                 dispatch(getEmpById(emp));
//             });
//     }

//     const submitGetAllEmps = (evt) => {
//         evt.preventDefault();
//         console.log('submitGetAllEmps');
//         axios.get(`emp/getallemps`)
//         // axios.get(`http://localhost:8082/emp/getallemps`)
//             .then((response) => {
//                 dispatch(getAllEmps(response.data));
//             })
//             .catch(() => {
//                 alert('Something is wrong!');
//             });
//     }

//     return (
//         <div>
//             <h1 className="display-4 text-primary mt-3 mb-3" >Employee Component</h1>
//             <p>Fetch data from backend, store it in redux store and get it to component</p>

//             <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
//                 <p>Find employee by id</p>
//                 <form className="form form-group form-primary" onSubmit={submitGetEmpById}>
//                     <input className="form-control mt-3" type="number" id="eid" name="eid" value={emp.eid} onChange={handleEmp} placeholder="Enter eid to search" autoFocus />
//                     <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Employee" />
//                 </form>
//                 <p>Data from store: {empDataFromStore.eid} {empDataFromStore.firstName} {empDataFromStore.salary}</p>
//             </div>

//             <div>
//                 <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
//                     <p>Find all employees</p>
//                     <div>
//                         <form className="form form-group form-primary">
//                             <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllEmps} value="Find All Employees" />
//                         </form>
//                     </div>
//                     <table className="table table-light table-striped">
//                         <thead>
//                             <tr>
//                                 <th>Eid</th>
//                                 <th>Name</th>
//                                 <th>Salary</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {empList.map((emp, k) => {
//                                 return (
//                                     <tr k={k}> <td>{emp.eid}</td>  <td>{emp.firstName}</td> <td>{emp.salary}</td></tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
//                 <p>Some other functionality</p>
//             </div>

//         </div>
//     );
// }
// export default EmpData;

// const EmpData = (props) => {
//     console.log('Child component');
//     return (
//         <div>
//             <h1 className="display-4 text-primary mt-3" >Employee Data Component</h1>
//             <p>Employee data component</p>
//         </div>
//     );
// }
// export default EmpData;

// // props - arguments to a component
// // pass data -
// // 1. from parent component to child component - props
// // 2. from child compoment to parent component - ??

// import { useEffect, useState } from "react";

// // import { useState } from "react";

// const EmpData = (props) => {
//     console.log('Child component');

//     // state - one object for a component to store all the data in that component
//     // in function component, state can be created with useState(); hook (hook means method)
//     // syntax const [variableName, setVariableName] = useState(initial value);
//     // const [eid, setEid] = useState(0);
//     // const [ename, setEname] = useState('');
//     // const [isAvailable, setIsAvailable] = useState(false);
//     // const [emp, setEmp] = useState({});
//     // const [cities, setCities] = useState([]);

//     // const childData = 2211;
//     const [childData, setChildData] = useState(1);
//     // const [childData2, setChildData2] = useState(1); // multipple variables are also possible

//     // optionally, state can be initialized with useEffect();
//     // useEffect(arg, arg2);

//     useEffect(() => {
//         console.log('Child useEffect');
//         setChildData(41548);
//     }
//         , []);

//     const childFun = () => {
//         console.log('childFun');
//         return childData;
//     }

//     return (
//         <div>
//             <p className="display-4 text-primary">Emp Data Component</p>
//             <p> Child data in child component :  {childData}</p>

//             {/* <p>{props.someData.def}</p> */}
//             <p>{props.numToPassToChild}</p>
//             {/* try this  */}
//             {/* <p>{props.anotherData}</p> */}
//             <p>{props.someOtherData}</p>
//             {/* Invoke function from parent  */}
//             {/* <p>{props.callParentFun}</p> */}
//             {/* <button className="btn btn-primary" onClick={() => { props.callParentFun(childFun) }} > */}
//             Pass data From child To parent</button>
//         </div >
//     );
// }

// export default EmpData;
