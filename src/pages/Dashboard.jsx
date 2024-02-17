import React from "react";
import { useAuth } from "../firebase/auth";

function Dashboard() {
  const { authUser } = useAuth();
  return (
    <>
      <div className="container py-3">
        <h6 className="text-secondary text-uppercase">Dashboard</h6>
        <h1 className="fw-bold">Welcome {authUser?.email}</h1>
      </div>
    </>
  );
}

export default Dashboard;
