import { createSlice } from "@reduxjs/toolkit";
import Bill from "../components/models/Bill";

const BillSlice = createSlice({
  name: "bill",
  initialState: {
    billState: new Bill(),
    billList: [],
  },

  reducers: {
    getAllBill: (state, action) => {
      console.log("BillSlice reducers getAllBill");
      state.billList = action.payload;
    },

    viewBillByConsumerNumber: (state, action) => {
      console.log("BillSlice reducer viewBillByConsumerNumber");
      state.billState = action.payload;
    },

    viewBillByMobileNumber: (state, action) => {
      console.log("BillSlice reducer viewBillByMobileNumber");
      state.billState = action.payload;
    },

    viewBillByEmail: (state, action) => {
      console.log("BillSlice reducer viewBillByEmail");
      state.billState = action.payload;
    },
  },
});

export const {
  getAllBill,
  viewBillByConsumerNumber,
  viewBillByMobileNumber,
  viewBillByEmail,
} = BillSlice.actions;

export default BillSlice.reducer;
