import { createSlice } from "@reduxjs/toolkit";
// import Employee from "../components/models/Employee";
import Reading from "../components/models/Reading";
// step 3 for redux - create slices for each components
const ReadingSlice = createSlice({
  name: "reading",

  initialState: {
    // empState: {
    //     eid: 101,
    //     firstName: 'Sonu',
    //     salary: 10.5
    // }
    readingState: new Reading(),
    readingList: [],
  },

  reducers: {
    getReadingById: (state, action) => {
      console.log("ReadingSlice reducers getReadingById");
      state.readingState = action.payload;
    },
    SubmitReading: (state, action) => {
      console.log("ReadingSlice reducers  SubmitReading");
      state.readingState = action.payload;
    },
    getAllReading: (state, action) => {
      console.log("ReadingSlice reducers getAllReading");
      state.readingList = action.payload;
    },
  },
});

export const {
  getReadingById,
  getAllReading,
  SubmitReading,
} = ReadingSlice.actions;

export default ReadingSlice.reducer;
