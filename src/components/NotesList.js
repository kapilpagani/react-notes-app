import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import { PropTypes } from "prop-types";

const NotesList = ({ notes, saveNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note note={note} key={note.id} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote saveNote={saveNote} />
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array,
  saveNote: PropTypes.func,
  handleDeleteNote: PropTypes.func,
};

export default NotesList;
