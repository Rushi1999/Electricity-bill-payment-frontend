import {
  getCustomerByIdService,
  getAllCustomerService,
} from "./services/CustomerService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCustomerById, getAllCustomer } from "../redux/CustomerSlice";
import axios from "axios";
import { Store } from "redux";
import { Provider } from "react";
import Customer from "./models/Customer";

const CustomerData = () => {
  const [customer, setCustomer] = useState(new Customer());
  const [newCustomerObj, setNewCustomerObj] = useState(new Customer());
  const [displayCustomerObj, setDisplayCustomerObj] = useState(new Customer());
  const [customerId, setCustomerId] = useState("");
  const dispatch = useDispatch();
  const customerDataFromStore = useSelector(
    (state) => state.customer.customerState
  );
  const customerList = useSelector((state) => state.customer.customerList);

  const submitGetAllCustomer = (evt) => {
    evt.preventDefault();
    console.log("submitGetAllCustomer");
    getAllCustomerService()
      .then((response) => {
        dispatch(getAllCustomer(response.data));
      })
      .catch(() => {
        alert(`Something is wrong!`);
      });
  };

  const handleAddCustomer = (e) => {
    console.log(e.target.value);
    setNewCustomerObj({
      ...newCustomerObj,
      [e.target.name]: e.target.value,
    });
  };

  /*add connection */

  const submitAddCustomer = (evt) => {
    evt.preventDefault();
    axios
      .post(`http://localhost:8082/customer/addCustomer`, newCustomerObj)
      .then((response) => {
        setDisplayCustomerObj(response.data);
        alert("customer added successfully.");
        setNewCustomerObj({
          firstName: "",
          middleName: "",
          lastName: "",
          gender: "",
          email: "",
          addharNumber: "",
          mobileNumber: "",
        });
      })
      .catch(() => {
        alert("Customer could not be added.");
      });
  };
  //..........................................................................................................
  return (
    <div className="container">
      <h1 className="display-4 text-primary mt-3 mb-3">Customer Table</h1>

      <div class="container register-form">
        <div class="form">
          <div class="note">
            <p>This is a CustomerProfile Form made using Boostrap.</p>
          </div>

          <div class="form-content">
            <div class="row">
              <div class="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="firstName*"
                    onChange={handleAddCustomer}
                    value={newCustomerObj.firstName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    className="form-control"
                    placeholder="middleName*"
                    onChange={handleAddCustomer}
                    value={newCustomerObj.middleName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="lastName*"
                    onChange={handleAddCustomer}
                    value={newCustomerObj.lastName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="form-control"
                    placeholder="date of birth*"
                    // onChange={handleAddCustomer}
                    // value={newCustomerObj.last}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <select
                    class="form-control mb-3"
                    name="gender"
                    id="gender"
                    onChange={handleAddCustomer}
                  >
                    <option value="customerStatus">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="female">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="email*"
                    onChange={handleAddCustomer}
                    value={newCustomerObj.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id=" mobileNumber"
                    name="mobileNumber"
                    className="form-control"
                    placeholder="mobileNumber*"
                    onChange={handleAddCustomer}
                    value={newCustomerObj.mobileNumber}
                  />
                </div>

                <div className="form-group">
                  <input
                    type=""
                    id="addharNumber"
                    name="addharNumber"
                    className="form-control"
                    placeholder="addharNumber*"
                    onChange={handleAddCustomer}
                    value={newCustomerObj.addharNumber}
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btnSubmit   btn btn-primary"
              value="Add Customer"
              onClick={submitAddCustomer}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerData;
