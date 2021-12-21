import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  viewBillByConsumerNumber,
  viewBillByMobileNumber,
  viewBillByEmail,
  getAllBill,
} from "../redux/BillSlice";
import {
  viewBillByConsumerNumberService,
  viewBillByMobileNumberService,
  viewBillByEmailService,
  getAllBillService,
} from "./services/BillService";

const BillData = () => {
  const [consumerNumber, setconsumerNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const billDataFromStore = useSelector((state) => state.bill.billState);
  const billList = useSelector((state) => state.bill.billList);

  const handleBillByconsumerNumber = (b) => {
    console.log("handleBillByconsumerNumber");
    setconsumerNumber(b.target.value);
  };

  const handleBillBymobileNumber = (b) => {
    console.log("handleBillBymobileNumber");
    setMobileNumber(b.target.value);
  };

  const handleBillByEmail = (b) => {
    console.log("handleBillByemail");
    setEmail(b.target.value);
  };

  const submitGetAllBill = (evt) => {
    evt.preventDefault();
    console.log("submitGetAllBill");
    getAllBillService()
      .then((response) => {
        dispatch(getAllBill(response.data));
      })
      .catch(() => {
        alert(`Something is wrong!`);
      });
  };

  const submitviewBillByConsumerNumber = (evt) => {
    evt.preventDefault();
    console.log("submitviewBillByConsumerNumber");
    viewBillByConsumerNumberService(consumerNumber)
      .then((response) => {
        dispatch(viewBillByConsumerNumber(response.data));
      })
      .catch(() => {
        alert(`Bill with ${consumerNumber} not found.`);
      });
    console.log(Object.keys(billList));
    setconsumerNumber("");
  };

  const submitViewBillByMobileNumber = (evt) => {
    evt.preventDefault();
    console.log("submitViewBillByMobileNumber");
    viewBillByMobileNumberService(mobileNumber)
      .then((response) => {
        dispatch(viewBillByMobileNumber(response.data));
      })
      .catch(() => {
        alert(`Bill with ${mobileNumber} not found.`);
      });
    console.log(Object.keys(billList));
    setMobileNumber("");
  };

  const submitViewBillByEmail = (evt) => {
    evt.preventDefault();
    console.log("submitViewBillByEmail");
    viewBillByEmailService(email)
      .then((response) => {
        dispatch(viewBillByEmail(response.data));
      })
      .catch(() => {
        alert(`Bill with ${email} not found.`);
      });
    console.log(Object.keys(billList));
    setEmail("");
  };

  return (
    <div className="container">
      <h1 className="display-4 text-primary mt-3 mb-3">Check Bills</h1>

      <div className="col-9 border border-light shadow p-3 mb-5 bg-white">
        <p className="text-primary mt-3 mb-3">Find Bill by Consumer Number</p>
        <form
          className="form form-group form-primary"
          onSubmit={submitviewBillByConsumerNumber}
        >
          <input
            className="form-control mt-3"
            type="number"
            id="ConsumerNumber"
            name="ConsumerNumber"
            value={consumerNumber}
            onChange={handleBillByconsumerNumber}
            placeholder="Enter Consumer Number..."
            autoFocus
            required
          />
          <input
            class="form-control mt-3 btn-sm small btn btn-primary"
            type="submit"
            value="Find Bill"
            data-toggle="modal"
            data-target="#exampleModal"
          />
        </form>
        <div class="modal" tabindex="-1" id="exampleModal" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Bill details</h5>
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
                <table className=" table table-light table-striped ">
                  <thead>
                    <tr>
                      <th>units Consumed</th>
                      <th>Bill Amount</th>
                      <th>Bill Date</th>
                      <th>Bill Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{billDataFromStore.unitsConsumed} </td>
                      <td>{billDataFromStore.billAmount} </td>
                      <td>{billDataFromStore.billDate} </td>
                      <td>{billDataFromStore.billDueDate} </td>
                    </tr>
                  </tbody>
                </table>
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
        <p className="text-primary mt-3 mb-3">Find Bill by Mobile Number</p>
        <form
          className="form form-group form-primary"
          onSubmit={submitViewBillByMobileNumber}
        >
          <input
            className="form-control mt-3"
            type="number"
            maxLength={10}
            minLength={10}
            id="mobileNumber"
            name="mobileNumber"
            value={mobileNumber}
            onChange={handleBillBymobileNumber}
            placeholder="Enter Mobile Number..."
            autoFocus
            required
          />
          <input
            class="form-control mt-3 btn-sm small btn btn-primary"
            type="submit"
            value="Find Bill"
            data-toggle="modal"
            data-target="#exampleModal"
          />
        </form>
        <div class="modal" tabindex="-1" id="exampleModal" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Bill details</h5>
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
                <table className=" table table-light table-striped ">
                  <thead>
                    <tr>
                      <th>units Consumed</th>
                      <th>Bill Amount</th>
                      <th>Bill Date</th>
                      <th>Bill Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{billDataFromStore.unitsConsumed} </td>
                      <td>{billDataFromStore.billAmount} </td>
                      <td>{billDataFromStore.billDate} </td>
                      <td>{billDataFromStore.billDueDate} </td>
                    </tr>
                  </tbody>
                </table>
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
        <p className="text-primary mt-3 mb-3">Find Bill by Email Id</p>
        <form
          className="form form-group form-primary"
          onSubmit={submitViewBillByEmail}
        >
          <input
            className="form-control mt-3"
            type="text"
            id="emails"
            name="mobileNumber"
            value={email}
            onChange={handleBillByEmail}
            placeholder="Enter Email."
            autoFocus
            required
          />
          <input
            class="form-control mt-3 btn-sm small btn btn-primary"
            type="submit"
            value="Find Bill"
            data-toggle="modal"
            data-target="#exampleModal"
          />
        </form>
        <div class="modal" tabindex="-1" id="exampleModal" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Bill details</h5>
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
                <table className=" table table-light table-striped ">
                  <thead>
                    <tr>
                      <th>units Consumed</th>
                      <th>Bill Amount</th>
                      <th>Bill Date</th>
                      <th>Bill Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{billDataFromStore.unitsConsumed} </td>
                      <td>{billDataFromStore.billAmount} </td>
                      <td>{billDataFromStore.billDate} </td>
                      <td>{billDataFromStore.billDueDate} </td>
                    </tr>
                  </tbody>
                </table>
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
    </div>
  );
};

export default BillData;
