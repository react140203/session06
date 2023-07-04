import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { logout } from "./auth.slice";

export const Logout = () => {
  const dispatch = useAppDispatch();
  dispatch(logout());
  return (
    <>
      <Navigate to="/"></Navigate>
    </>
  );
};
