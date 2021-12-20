import { createSlice } from "@reduxjs/toolkit";
import Payment from "../components/models/Payment";

// step 3 for redux - create slices for each components
const PaymentSlice = createSlice({
  name: "payment",

  initialState: {
    // empState: {
    //     eid: 101,
    //     firstName: 'Sonu',
    //     salary: 10.5
    // }

    paymentState: new Payment(),
    paymentList: [],
  },

  reducers: {
    getPaymentById: (state, action) => {
      console.log("PayemntSlice reducers getPaymentById");
      state.paymentState = action.payload;
    },

    getAllPayment: (state, action) => {
      console.log("PaymentSlice reducers getAllPayment");
      state.paymentList = action.payload;
    },

    // more methods will be added
  },
});

// export const { getEmpById, getAllEmps } = EmpSlice.actions;
export const { getAllPayment, getPaymentById } = PaymentSlice.actions;
export default PaymentSlice.reducer;
