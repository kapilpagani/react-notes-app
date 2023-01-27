import React from "react";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const Note = ({ note, handleDeleteNote }) => {
  return (
    <>
      <div className="note">
        <span>{note.text}</span>
        <div className="note-footer">
          <small>{note.date} </small>
          <MdDeleteForever
            className="delete-icon"
            size="1.3em"
            onClick={() => handleDeleteNote(note.id)}
          />
        </div>
      </div>
    </>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    text: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
  }),
  handleDeleteNote: PropTypes.func,
};

export default Note;
