import { createSlice } from "@reduxjs/toolkit";
// import Employee from "../components/models/Employee";
import Connection from "../components/models/Connection";
// step 3 for redux - create slices for each components
const ConnectionSlice = createSlice({
  name: "connection",

  initialState: {
    // empState: {
    //     eid: 101,
    //     firstName: 'Sonu',
    //     salary: 10.5
    // }

    connectionState: new Connection(),
    connectionList: [],
  },

  reducers: {
    getConnectionById: (state, action) => {
      console.log("ConnectionSlice reducers getConnectionById");
      state.connectionState = action.payload;
    },

    getAllConnection: (state, action) => {
      console.log("ConnectionSlice reducers getAllConnection");
      state.connectionList = action.payload;
    },

    // more methods will be added
  },
});

// export const { getEmpById, getAllEmps } = EmpSlice.actions;
export const { getConnectionById, getAllConnection } = ConnectionSlice.actions;

export default ConnectionSlice.reducer;
