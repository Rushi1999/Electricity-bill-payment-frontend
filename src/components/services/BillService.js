import axios from "axios";

const getAllBillService = () => {
  console.log(`getAllBillService`);
  return axios.get(`/bill/getAllbill`);
};

const viewBillByConsumerNumberService = (consumerNumber) => {
  console.log("viewBillByConsumerNumberService");
  return axios.get(`/bill/viewBillByConsumerNumber/${consumerNumber}`);
};

const viewBillByMobileNumberService = (mobileNumber) => {
  console.log("viewBillByMobileNumberService");
  return axios.get(`/bill/viewBillByMobileNumber/${mobileNumber}`);
};

const viewBillByEmailService = (email) => {
  console.log("viewBillByEmailService");
  return axios.get(`/bill/viewBillByEmail/${email}`);
};

export {
  getAllBillService,
  viewBillByConsumerNumberService,
  viewBillByMobileNumberService,
  viewBillByEmailService,
};
