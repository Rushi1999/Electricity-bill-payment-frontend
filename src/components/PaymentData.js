import {
  getPaymentByIdService,
  getAllPaymentService,
} from "./services/PaymentService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Payment from "./models/Payment";
import axios from "axios";

import { getAllPayment, getPaymentById } from "../redux/PaymentSlice";
import { Store } from "redux";
import { Provider } from "react";

const PaymentData = () => {
  const [payment, setPayment] = useState(new Payment());
  const [newPaymentObj, setNewPaymentObj] = useState(new Payment());
  const [displayPaymentObj, setDisplayConnectionObj] = useState(new Payment());

  const [paymentId, setPaymentId] = useState("");

  /*original */
  const dispatch = useDispatch();

  const paymentDataFromStore = useSelector(
    (state) => state.payment.paymentState
  );
  const paymentList = useSelector((state) => state.payment.paymentList);

  const handlePayment = (e) => {
    console.log("handlePayment");
    setPaymentId(e.target.value);
  };

  // const handleAddPayment = (e) => {
  //   console.log(e.target.value);
  //   setNewPaymentObj({
  //     ...newPaymentObj,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const submitGetPaymentById = (evt) => {
    evt.preventDefault();
    console.log("submitGetPaymentById");
    getPaymentByIdService(paymentId)
      .then((response) => {
        dispatch(getPaymentById(response.data));
      })
      .catch(() => {
        alert(`payment with ${paymentId} not found.`);
      });
    console.log(Object.keys(paymentList));
    setPaymentId("");
  };

  /*add connection */

  // const submitAddPayment = (evt) => {
  //   evt.preventDefault();
  //   axios
  //     .post(`http://localhost:8082/payment/addConnection`, newPaymentObj)
  //     .then((response) => {
  //       setDisplayPaymentObj(response.data);
  //       alert("connection added successfully.");
  //       setNewPaymentObj({
  //         applicationDate: "",
  //         connectionDate: "",
  //         connectionType: "",
  //         connectionStatus: "",
  //       });
  //     })
  //     .catch(() => {
  //       alert("Payment could not be added.");
  //     });
  // };

  const submitGetAllPayment = (evt) => {
    evt.preventDefault();
    console.log("submitGetAllPayment");
    getAllPaymentService()
      .then((response) => {
        dispatch(getAllPayment(response.data));
      })
      .catch(() => {
        alert(`Something is wrong!`);
      });
  };

  return (
    <div class="container-fluid p-4">
      <h1 class=" text-primary mt-3 mb-3 table-text">Payment Table</h1>
      <p>Below table contain all customer payment details</p>
      <div class="row">
        <div className="col-2 mr-2 border border-light shadow p-3 mb-5 bg-white">
          <p className="text-primary mt-3 mb-3">Find Payment by PaymentId</p>
          <form
            className="form form-group form-primary"
            onSubmit={submitGetPaymentById}
          >
            <input
              className="form-control mt-3"
              type="number"
              id="paymentId"
              name="paymentId"
              value={paymentId}
              onChange={handlePayment}
              placeholder="Enter payment Id..."
              autoFocus
              required
            />
            <input
              class="form-control mt-3 btn-sm small btn btn-primary"
              type="submit"
              value="Find payment"
              data-toggle="modal"
              data-target="#exampleModal"
            />
          </form>
          <div class="modal" tabindex="-1" id="exampleModal" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Payment details</h5>
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
                    {paymentDataFromStore.paymentId}
                    {"  "}
                    {paymentDataFromStore.paymentDate}
                    {"  "}
                    {paymentDataFromStore.totalPaid}
                    {"  "}
                    {paymentDataFromStore.paymentMode}
                    {"  "}
                    {paymentDataFromStore.paymentStatus}
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

        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
          {/* <p>Find all Payment</p> */}
          <div>
            <form className="form form-group form-primary">
              {/* <input
                className="mt-3 btn btn-primary btn-block"
                type="button"
                onClick={submitGetAllPayment}
                value="Find All Payments"
              /> */}
              <button
                type="button"
                id="OnHoverText"
                class="btn btn-2 btn-link showall"
                onClick={submitGetAllPayment}
                value="Find All Payment"
              >
                Show All payments
              </button>
            </form>
          </div>
          <table className="table table-light table-striped ">
            <thead>
              <tr>
                <th>Payment Id</th>
                <th>payment Status</th>
                <th>payment Mode</th>
                <th>total Bill</th>
              </tr>
            </thead>
            <tbody>
              {paymentList.map((payment, k) => {
                return (
                  <tr k={k}>
                    {" "}
                    <td>{payment.paymentId}</td>
                    <td>{payment.status}</td> {"  "}
                    <td>{payment.paymentMode}</td>
                    <td>{payment.totalPaid}</td>{" "}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PaymentData;
