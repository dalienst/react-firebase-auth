import React from 'react'
import { useAuth } from '../firebase/auth'
import { Link } from 'react-router-dom';

function Dashboard() {
  const {authUser, isLoading, signOut} = useAuth();
  return (
    <>
    <div className="container py-2">
      <h1 className="fw-bold">Welcome {authUser?.email}</h1>
      <Link onClick={signOut} className="btn btn-outline-dark">
        Logout
      </Link>
    </div>
    </>
  )
}

export default Dashboard