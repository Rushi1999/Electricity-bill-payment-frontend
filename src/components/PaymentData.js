import { getAllPaymentService } from "./services/PaymentService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllPayment } from "../redux/PaymentSlice";

import { Store } from "redux";
import { Provider } from "react";

const PaymentData = () => {
  const [paymentId, setPaymentId] = useState("");
  const dispatch = useDispatch();
  const paymentDataFromStore = useSelector(
    (state) => state.payment.paymentState
  );
  const paymentList = useSelector((state) => state.payment.paymentList);

  const handlePayment = (e) => {
    console.log("handlePayment");
    setPaymentId(e.target.value);
  };

  //   const submitGetEmpById = (evt) => {
  //     evt.preventDefault();
  //     console.log("submitGetEmpById");
  //     getEmpByIdService(eid)
  //       .then((response) => {
  //         dispatch(getEmpById(response.data));
  //       })
  //       .catch(() => {
  //         alert(`Employee with ${eid} not found.`);
  //       });
  //     console.log(Object.keys(empList));
  //     setEid("");
  //   };

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
    <div className="container">
      <div>
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
          <p>Find all Payment</p>
          <div>
            <form className="form form-group form-primary">
              <input
                className="mt-3 btn btn-primary btn-block"
                type="button"
                onClick={submitGetAllPayment}
                value="Find All Employees"
              />
            </form>
          </div>
          <table className="table table-light table-striped ">
            <thead>
              <tr>
                <th>Payment Id</th>
                <th>paymentId</th>
                <th>paymentId</th>
              </tr>
            </thead>
            <tbody>
              {paymentList.map((payment, k) => {
                return (
                  <tr k={k}>
                    {" "}
                    <td>{payment.paymentId}</td> <td>{payment.paymentId}</td>{" "}
                    <td>{payment.paymentId}</td>
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
