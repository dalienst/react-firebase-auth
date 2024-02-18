/* eslint-disable no-unused-vars */
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase";
import { getDownloadURL } from "./storage";

const NOTES_COLLECTION = "notes";

export function addNote(uid, date, locationName, title, note) {
  addDoc(collection(db, NOTES_COLLECTION), {
    uid,
    date,
    locationName,
    title,
    note,
  });
}

export async function getNotes(uid) {
  const notes = query(
    collection(db, NOTES_COLLECTION),
    where("uid", "==", uid),
    orderBy("date", "desc")
  );
  const querySnapshot = await getDocs(notes);

  let allNotes = [];
  querySnapshot.forEach((documentSnapshot) => {
    const note = documentSnapshot.data();
    allNotes.push({
      ...note,
      date: note["date"].toDate(),
      id: documentSnapshot.id,
    });
  });
  return allNotes;
}

export function updateNote(id, uid, date, locationName, title, note) {
  setDoc(doc(db, NOTES_COLLECTION, id), {
    uid,
    date,
    locationName,
    title,
    note,
  });
}


export function deleteNote(id) {
  deleteDoc(doc(db, NOTES_COLLECTION, id));
}