import axios from "axios";

// Create services for other components in this way.

const getPaymentByIdService = (paymentId) => {
  console.log(`getPaymentByIdService`);
  return axios.get(`/payment/getpaymentbyid/${paymentId}`);
};
const getAllPaymentService = () => {
  console.log(`getPaymentByIdService`);
  return axios.get(`/payment/getallpayment`);
};

// const addEmpService = (emp) => {
//   console.log(`getEmpByIdService`);
//   return axios.post(`/emp/addemp`, emp);
// };

// const updateEmpService = (emp) => {
//   console.log(`getEmpByIdService`);
//   return axios.post(`/emp/updateemp`, emp);
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
  //   getEmpByIdService,
  getAllPaymentService,
  getPaymentByIdService,
  //   addEmpService,
  //   updateEmpService,
  //   deleteEmpService,
  //   getEmpByNameService,
};
