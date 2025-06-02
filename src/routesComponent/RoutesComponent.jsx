import { Route, Routes } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../components/homePage/Auth/ResetPassword/ResetPassword";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route element={<PrivateRoute />}></Route>
    </Routes>
  );
};

export default RoutesComponent;
