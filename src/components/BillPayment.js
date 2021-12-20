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
  // const [connectionList, setConnectionList] = useState([]);
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

  const handleAddPayment = (e) => {
    console.log(e.target.value);
    setNewPaymentObj({
      ...newPaymentObj,
      [e.target.name]: e.target.value,
    });
  };

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
    <div className="container col-6">
      <div class="register-form">
        <div class="form">
          <div class="note">
            <p>Make a payment Form made using Boostrap.</p>
          </div>
          <div class="form-content">
            <div class="col-md-6">
              <div class="form-group">
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
              </div>

              <div className="form-group">
                <input
                  className="form-control mt-3"
                  type="number"
                  id="totalPaid"
                  name="totalPaid"
                  //   {displayPaymentObj.totalPaid}
                  onChange={handlePayment}
                  placeholder="Enter payment Id..."
                  autoFocus
                  required
                  //   onChange={handleAddConnection}
                />
              </div>
              <div class="form-group">
                <select
                  class="form-control mb-3"
                  name="paymentMode"
                  id="paymentMode"
                  //   onChange={handleAddConnection}
                >
                  <option value="paymentMode">Payment Mode</option>
                  <option value="DEBIT">DEBIT</option>
                  <option value="NETBANKING">NETBANKING</option>
                  <option value="CREDIT">CREDIT</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <input
        class="form-control mt-3 btn-sm small btn btn-primary"
        type="submit"
        value="Find Connection"
        data-toggle="modal"
        data-target="#exampleModal"
      /> */}
      <button
        type="button"
        class="btnSubmit   btn btn-primary"
        // class="form-control mt-3 btn-sm small btn btn-primary"
        // type="submit"
        value="Pay Bill"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Pay
      </button>
      <div class="modal" tabindex="-1" id="exampleModal" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Scan this QR code </h5>
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
                {displayPaymentObj.totalPaid}
                <a>
                  <img
                    class="barcode"
                    src="https://github.com/Rushi1999/Electricity-bill-payment-frontend/blob/main/src/assets/img/barcode.jpeg?raw=true"
                    alt="Canvas Logo"
                  />
                </a>
              </p>
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
      {/* </div> */}
      <p>
        Total Amount to pay: {displayPaymentObj.totalPaid}{" "}
        {displayPaymentObj.paymentMode}
      </p>
    </div>
  );
};
export default PaymentData;
