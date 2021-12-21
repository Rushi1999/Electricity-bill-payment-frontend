import axios from "axios";

// Create services for other components in this way.

const getCustomerByIdService = (customerId) => {
  console.log(`getCustomerIdService`);
  return axios.get(`/customer/getcustomerbyid/${customerId}`);
};

const getAllCustomerService = () => {
  console.log(`getCustomerByIdService`);
  return axios.get(`/customer/getallcustomer`);
};

export { getCustomerByIdService, getAllCustomerService };
