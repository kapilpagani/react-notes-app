import React, { useEffect } from "react";
import { useState } from "react";
// import { nanoid } from "nanoid";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      text: "This is my first note",
      date: "25/01/2023",
    },
    {
      id: uuidv4(),
      text: "This is my second note",
      date: "25/01/2023",
    },
    {
      id: uuidv4(),
      text: "This is my third note",
      date: "25/01/2023",
    },
    {
      id: uuidv4(),
      text: "This is my fourth note",
      date: "25/01/2023",
    },
  ]);

  useEffect(() => {
    const allNotes = JSON.parse(window.localStorage.getItem("allNotes"));
    if (allNotes) setNotes(allNotes);
  }, []);

  const saveNote = (text) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text,
      date: date.toLocaleDateString(),
    };

    const allNotes = [...notes, newNote];
    setNotes(allNotes);
    localStorage.setItem("allNotes", JSON.stringify(allNotes));
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("allNotes", JSON.stringify(newNotes));
    setNotes(newNotes);
  };

  return (
    <>
      <div className="container">
        <NotesList
          notes={notes}
          saveNote={saveNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </>
  );
}

export default App;
