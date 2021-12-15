import { createSlice } from "@reduxjs/toolkit";
// import Employee from "../components/models/Employee";
import Customer from "../components/models/Customer";
// step 3 for redux - create slices for each components
const CustomerSlice = createSlice({
  name: "customer",

  initialState: {
    // empState: {
    //     eid: 101,
    //     firstName: 'Sonu',
    //     salary: 10.5
    // }

    customerState: new Customer(),
    customerList: [],
  },

  reducers: {
    getCustomerById: (state, action) => {
      console.log("CustomerSlice reducers getCustomerById");
      state.customerState = action.payload;
    },

    // getAllConnection: (state, action) => {
    //   console.log("ConnectionSlice reducers getAllConnection");
    //   state.connectionList = action.payload;
    // },

    // more methods will be added
  },
});

// export const { getEmpById, getAllEmps } = EmpSlice.actions;
export const { getCustomerById } = CustomerSlice.actions;

export default CustomerSlice.reducer;
