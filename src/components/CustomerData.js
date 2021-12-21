import {
  getCustomerByIdService,
  getAllCustomerService,
} from "./services/CustomerService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCustomerById, getAllCustomer } from "../redux/CustomerSlice";
import axios from "axios";
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

  /*add customer profile */

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
    <div class="container-fluid p-4">
      <h1 className="display-4 text-primary mt-3 mb-3">Customer Data</h1>
      <p>Below table contain all customer details</p>
      <div class="row">
        <div className="col-2 mr-2 border border-light shadow p-3 mb-5 bg-white">
          <p>Find customer by customerid</p>
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
            Data from store:
            <th>
              {" "}
              {"customerId:"}
              {customerDataFromStore.customerId}
            </th>
            <br></br>
            <th>
              {" "}
              {"firstName:"}
              {customerDataFromStore.firstName}
            </th>
            <br></br>
            <th>
              {"middleName:"}
              {customerDataFromStore.middleName}
            </th>
            <br></br>
            <th>
              {" "}
              {"lastName:"} {customerDataFromStore.lastName}
            </th>
            <br></br>
            <th>
              {" "}
              {"gender:"} {customerDataFromStore.gender}
            </th>
            <br></br>
            <th>
              {" "}
              {"email:"}
              {customerDataFromStore.email}{" "}
            </th>{" "}
            <br></br>
            <th>
              {" "}
              {"addharNumber:"} {customerDataFromStore.addharNumber}
            </th>
            <br></br>
            <th>
              {" "}
              {"mobileNumber:"} {customerDataFromStore.mobileNumber}
            </th>
            <br></br>
          </p>
        </div>

        <div className="container-xxl">
          <div className="col-100 border border-light shadow p-3 mb-5 bg-white">
            <p>Show all customer</p>
            <div>
              <form className="form form-group form-primary">
                <input
                  className="mt-3 btn btn-primary btn-block"
                  type="button"
                  onClick={submitGetAllCustomer}
                  value="Find All Customer"
                />
              </form>
            </div>
            <table className=" table table-light ">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>customerId</th>
                      <th>firstName</th>
                      <th>middleName</th>
                      <th>lastName</th>
                      <th>gender</th>
                      <th>email</th>
                      <th>addharNumber</th>
                      <th>mobileNumber</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerList.map((customer, k) => {
                      return (
                        <tr k={k}>
                          <td>{customer.customerId}</td>{" "}
                          <td>{customer.firstName}</td>{" "}
                          <td>{customer.middleName}</td>{" "}
                          <td>{customer.lastName}</td>{" "}
                          <td>{customer.gender}</td> <td>{customer.email}</td>{" "}
                          <td>{customer.addharNumber}</td>{" "}
                          <td>{customer.mobileNumber}</td>{" "}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerData;
