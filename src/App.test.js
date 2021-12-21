import { render, screen } from "@testing-library/react";
// import Hello from "./components/Hello";
// import EmpData from "./components/EmpData";
// import SpringBootData from "./components/SpringBootData";
import { Provider } from "react-redux";
import store from "./redux/store";
import ConnectionData from "./components/ConnectionData";
import NewConnectionReq from "./components/NewConnectionReq";
import App from "./App";
import CustomerData from "./components/CustomerData";
import BillData from "./components/BillData";
import CheckBill from "./components/CheckBill";
import BillPayment from "./components/BillPayment";
import PaymentData from "./components/PaymentData";
import CustomerProfile from "./components/CustomerProfile";
import ReadingData from "./components/ReadingData";
import ReadingReq from "./components/ReadingReq";
//import { render, screen } from '@testing-library/react';
// Website https://jestjs.io/
// learning resources https://jestjs.io/docs/getting-started
//api https://jestjs.io/docs/api

// run -
// npm start
// afterwards
// Watch Usage
//  › Press a to run all tests.
//  › Press f to run only failed tests.
//  › Press q to quit watch mode.
//  › Press p to filter by a filename regex pattern.
//  › Press t to filter by a test name regex pattern.
//  › Press Enter to trigger a test run.

// sytnax to write test cases
// test('a string value that describes this test', () => { });

// beforeAll();
// beforeEach();
// afterAll();
// afterEach();

// use this hook to render a component only once before all the test cases

beforeAll(() => {
  console.log("beforeAll");
});

beforeEach(() => {
  console.log("beforreEach");
});
/**customer test case */
test("render Data from CustomerProfile", () => {
  render(
    <Provider store={store}>
      <CustomerData />
    </Provider>
  );
  const linkElement = screen.getByText("Customer Component");
  expect(linkElement).toBeInTheDocument();
});
test("render Data from CustomerProfile", () => {
  render(
    <Provider store={store}>
      <CustomerProfile />
    </Provider>
  );
  const linkElement = screen.getByText("Customer Component");
  expect(linkElement).toBeInTheDocument();
});
// negative test case
test("render Data from CustomerProfile", () => {
  render(
    <Provider store={store}>
      <CustomerProfile />
    </Provider>
  );
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe(
    "Some other text which is not present in the component."
  );
});

/**connection test cases */
test("render Data from ConnectionData", () => {
  render(
    <Provider store={store}>
      <ConnectionData />
    </Provider>
  );
  const linkElement = screen.getByText("Connection Component");
  expect(linkElement).toBeInTheDocument();
});
// negative test case

test("render Data from connectionData", () => {
  render(
    <Provider store={store}>
      <ConnectionData />
    </Provider>
  );
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe(
    "Some other text which is not present in the component."
  );
});

test("render Data from NewConnectionReq", () => {
  render(
    <Provider store={store}>
      <NewConnectionReq />
    </Provider>
  );
  const linkElement = screen.getByText("NewConnectionReq Component");
  expect(linkElement).toBeInTheDocument();
});

// negative test case
test("render Data from NewConnectionReq", () => {
  render(
    <Provider store={store}>
      <NewConnectionReq />
    </Provider>
  );
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe(
    "Some other text which is not present in the component."
  );
});

/**bill test case */
test("render Data from BillData", () => {
  render(
    <Provider store={store}>
      <BillData />
    </Provider>
  );
  const linkElement = screen.getByText("BillData Component");
  expect(linkElement).toBeInTheDocument();
});
test("render Data from CheckBill", () => {
  render(
    <Provider store={store}>
      <CheckBill />
    </Provider>
  );
  const linkElement = screen.getByText("CheckBill Component");
  expect(linkElement).toBeInTheDocument();
});
// negative test case
test("render Data from CheckBill", () => {
  render(
    <Provider store={store}>
      <CheckBill />
    </Provider>
  );
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe(
    "Some other text which is not present in the component."
  );
});

/**Payment test case */
test("render Data from PaymentData", () => {
  render(
    <Provider store={store}>
      <PaymentData />
    </Provider>
  );
  const linkElement = screen.getByText("PaymentData Component");
  expect(linkElement).toBeInTheDocument();
});
test("render Data from BillPayment", () => {
  render(
    <Provider store={store}>
      <BillPayment />
    </Provider>
  );
  const linkElement = screen.getByText("BillPayment Component");
  expect(linkElement).toBeInTheDocument();
});

/*reading test cases */

test("render Data from ReadingData", () => {
  render(
    <Provider store={store}>
      <ReadingData />
    </Provider>
  );
  const linkElement = screen.getByText("BillData Component");
  expect(linkElement).toBeInTheDocument();
});

test("render Data from ReadingReq", () => {
  render(
    <Provider store={store}>
      <ReadingReq />
    </Provider>
  );
  const linkElement = screen.getByText("CheckBill Component");
  expect(linkElement).toBeInTheDocument();
});
// negative test case
test("render Data from ReadingReq", () => {
  render(
    <Provider store={store}>
      <ReadingReq />
    </Provider>
  );
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe(
    "Some other text which is not present in the component."
  );
});

/**Payment test case */
test("render Data from PaymentData", () => {
  render(
    <Provider store={store}>
      <PaymentData />
    </Provider>
  );
  const linkElement = screen.getByText("PaymentData Component");
  expect(linkElement).toBeInTheDocument();
});
test("render Data from BillPayment", () => {
  render(
    <Provider store={store}>
      <BillPayment />
    </Provider>
  );
  const linkElement = screen.getByText("BillPayment Component");
  expect(linkElement).toBeInTheDocument();
});

// positive test case

test("render Data from SpringBootData", () => {
  render(
    <Provider store={store}>
      <SpringBootData />
    </Provider>
  );
  const linkElement = screen.getByText("Get All Employees");
  expect(linkElement).toBeInTheDocument();
});

// negative test case

test("render Data from SpringBootData", () => {
  render(
    <Provider store={store}>
      <SpringBootData />
    </Provider>
  );
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe(
    "Some other text which is not present in the component."
  );
});

// import { render, screen } from '@testing-library/react';

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
