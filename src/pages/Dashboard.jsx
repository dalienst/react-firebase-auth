import React, { useEffect, useState } from "react";
import { useAuth } from "../firebase/auth";
import { getNotes } from "../firebase/firestore";

function Dashboard() {
  const { authUser } = useAuth();
  const [notes, setNotes] = useState([]);

  useEffect(() => {}, [authUser]);

  // get notes

  useEffect(() => {
    const fetchData = async () => {
      if (authUser) {
        const response = await getNotes(authUser.uid);
        setNotes(response);
      }
    };
    fetchData();
  }, [authUser]);


  return (
    <>
      <div className="container py-3">
        <h6 className="text-secondary text-uppercase">Dashboard</h6>
        <h1 className="fw-bold">Welcome {authUser?.email}</h1>
        <hr />

        <section>
          <article>
            {notes.map((note) => (
              <p key={note.id}>{note.title}</p>
            ))}
          </article>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
