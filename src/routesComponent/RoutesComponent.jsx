import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../components/homePage/Auth/ResetPassword/ResetPassword";
import DashBoard from "../components/dashBoard/DashBoard";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={[<DashBoard />]} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
