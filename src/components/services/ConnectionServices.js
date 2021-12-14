import axios from "axios";

// Create services for other components in this way.

const getConnectionByIdService = (connectionId) => {
  console.log(`getConnectionIdService`);
  return axios.get(`/connection/getconnectionbyid/${connectionId}`);
};
const getAllConnectionService = () => {
  console.log(`getConnectionByIdService`);
  return axios.get(`/connection/getallconnection`);
};

// const addEmpService = (emp) => {
//   console.log(`getEmpByIdService`);
//   return axios.post(`/emp/addemp`, emp);
// };

// const updateEmpService = (emp) => {
//   console.log(`getEmpByIdService`);
//   return axios.post(`/connection/updateemp`, emp);
// };

// const deleteEmpService = (eid) => {
//   console.log(`getEmpByIdService`);
//   return axios.post(`/emp/deleteempbyid${eid}`);
// };

// const getEmpByNameService = (firstName) => {
//   console.log(`getEmpByIdService`);
//   return axios.post(`/emp/getbyname/${firstName}`);
// };

export {
  getConnectionByIdService,
  getAllConnectionService,
  // addEmpService,
  // updateEmpService,
  // deleteEmpService,
  // getEmpByNameService,
};
