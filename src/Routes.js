import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmpData from "./components/EmpData";
import ConnectionData from "./components/ConnectionData";
import CustomerData from "./components/CustomerData";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Page404 from "./components/Page404";
import Register from "./components/Register";
import SpringBootData from "./components/SpringBootData";
import PaymentData from "./components/PaymentData";
import NewConnectionReq from "./components/NewConnectionReq";
import BillPayment from "./components/BillPayment";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import CustomerProfile from "./components/CustomerProfile";
import ReadingData from "./components/ReadingData";
import ReadingReq from "./components/ReadingReq";
import BillData from "./components/BillData";
import CheckBill from "./components/CheckBill";
const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <div className="">
            <Switch>
              <Route exact path="/">
                {" "}
                <Home />{" "}
              </Route>
              <Route path="/home">
                {" "}
                <Home />{" "}
              </Route>
              <Route path="/contact">
                {" "}
                <Contact />{" "}
              </Route>
              <Route path="/blog">
                {" "}
                <Blog />{" "}
              </Route>
              <Route path="/bill">
                {" "}
                <BillData />{" "}
              </Route>
              <Route path="/about">
                {" "}
                <About />{" "}
              </Route>
              <Route path="/team">
                {" "}
                <Team />{" "}
              </Route>
              <Route path="/testimonials">
                {" "}
                <Testimonials />{" "}
              </Route>
              <Route path="/hello">
                {" "}
                <Hello />{" "}
              </Route>

              <Route path="/emp">
                {" "}
                <EmpData />{" "}
              </Route>
              <Route path="/connection">
                {" "}
                <ConnectionData />{" "}
              </Route>
              <Route path="/newconnectionreq">
                {" "}
                <NewConnectionReq />{" "}
              </Route>
              <Route path="/reading">
                {" "}
                <ReadingData />{" "}
              </Route>
              <Route path="/readingreq">
                {" "}
                <ReadingReq />{" "}
              </Route>
              <Route path="/checkbill">
                {" "}
                <CheckBill />{" "}
              </Route>
              <Route path="/payment">
                {" "}
                <PaymentData />{" "}
              </Route>
              <Route path="/billpayment">
                {" "}
                <BillPayment />{" "}
              </Route>
              <Route path="/customer">
                {" "}
                <CustomerData />{" "}
              </Route>
              <Route path="/customerprofile">
                {" "}
                <CustomerProfile />{" "}
              </Route>
              <Route path="/spring">
                {" "}
                <SpringBootData />{" "}
              </Route>
              <Route path="/register">
                {" "}
                <Register />{" "}
              </Route>
              <Route path="/login">
                {" "}
                <Login />{" "}
              </Route>
              <Route path="/logout">
                {" "}
                <Logout />{" "}
              </Route>
              <Route path="/*">
                {" "}
                <Page404 />{" "}
              </Route>
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
};

export default Routes;
