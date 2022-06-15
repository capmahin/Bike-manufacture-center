import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";

import Manufacture from "./Pages/Manufacture/Manufacture";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyReview from "./Pages/Dashboard/MyReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFound from "./Pages/Shared/NotFound";
import Blogs from "./Pages/Blogs'/Blogs";
import Review from "./Pages/Home/Review";

import Contect from "./Pages/Contect/Contect";
import Review1 from "./Pages/Reviews/Review1";

import AddMechanic from "./Pages/Dashboard/AddMechanic";
import MangeMechanic from "./Pages/Dashboard/MangeMechanic";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="review" element={<Review1></Review1>} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path="blogs" element={<Blogs />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="manufacture"
          element={
            <RequireAuth>
              <Manufacture />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addMechanic"
            element={
              <RequireAdmin>
                <AddMechanic></AddMechanic>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageMechanic"
            element={
              <RequireAdmin>
                <MangeMechanic></MangeMechanic>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
