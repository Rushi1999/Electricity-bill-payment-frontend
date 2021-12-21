import { createSlice } from "@reduxjs/toolkit";
// import Employee from "../components/models/Employee";
import Customer from "../components/models/Customer";
// step 3 for redux - create slices for each components
const CustomerSlice = createSlice({
  name: "customer",

  initialState: {
    customerState: new Customer(),
    customerList: [],
  },

  reducers: {
    getCustomerById: (state, action) => {
      console.log("CustomerSlice reducers getCustomerById");
      state.customerState = action.payload;
    },
    getAllCustomer: (state, action) => {
      console.log("ConnectionSlice reducers getAllCustomer");
      state.customerList = action.payload;
    },
  },
});

export const { getCustomerById, getAllCustomer } = CustomerSlice.actions;

export default CustomerSlice.reducer;
