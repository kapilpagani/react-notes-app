import React, { useState } from "react";
import PropTypes from "prop-types";

const AddNote = ({ saveNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0)
      setNoteText(event.target.value);
  };

  const handleSubmit = () => {
    if (noteText.trim().length > 0) {
      saveNote(noteText);
      setNoteText("");
    }
  };

  return (
    <>
      <div className="note new">
        <textarea
          rows="8"
          cols="10"
          placeholder="Type to add a Note..."
          value={noteText}
          onChange={handleChange}
          // disabled={noteText.length >= 200 ? true : false}
        />
        <div className="note-footer">
          <small>{characterLimit - noteText.length} Remaining</small>
          <button className="save" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

AddNote.propTypes = {
  saveNote: PropTypes.func,
};

export default AddNote;
