import React, { ReactElement } from "react";
import { useAppSelector } from "../redux/hooks";
import { Navigate } from "react-router-dom";

interface ProtectRouteProps {
  children: ReactElement;
}
export default function ProtectRoute({ children }: ProtectRouteProps) {
  const auth = useAppSelector((x) => x.auth);
  if (auth.token) {
    return children;
  }
  return <Navigate to="/login" />;
}
