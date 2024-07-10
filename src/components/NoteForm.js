// src/components/NoteForm.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/noteActions";
import "./notesForm.css";

const NoteForm = ({ addNote, notes }) => {
  const [noteText, setNoteText] = useState("");
  const [noteColor, setNoteColor] = useState("#ffffff");
  const [error, setError] = useState(null);

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      const newNote = {
        text: noteText,
        color: noteColor,
      };

      addNote(newNote);
      setNoteText("");
      setNoteColor("#ffffff");
      setError(null); // Not eklenirse hatayı sıfırla
    } else {
      setError("Not boş olamaz!"); // Not boşsa hatayı set et
    }
  };

  return (
    <div>
      <h2>Yeni Not Ekle</h2>
      <textarea
        value={noteText}
        placeholder="Yeni Not Yazın ve Ekleyin..."
        onChange={(e) => setNoteText(e.target.value)}
      />
      <input
        type="color"
        value={noteColor}
        onChange={(e) => setNoteColor(e.target.value)}
      />
      <button onClick={handleAddNote}>Ekle</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes.notes,
});

export default connect(mapStateToProps, { addNote })(NoteForm);
