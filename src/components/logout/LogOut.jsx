import { useDispatch } from "react-redux";
import { logout } from "../../reducers/usersSlice";
import { Link } from "react-router-dom";

const LogOut = () => {
  const dispatch = useDispatch();
  const userLoggedout = () => {
    dispatch(logout());
  };
  return (
    <div className="LogOut">
      <Link to="/" onClick={userLoggedout}>
        Log Out
      </Link>
    </div>
  );
};

export default LogOut;
