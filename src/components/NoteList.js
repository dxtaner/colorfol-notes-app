// src/components/NoteList.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteNote } from "../actions/noteActions";
import "./noteList.css";

const NoteList = ({ notes, deleteNote }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage] = useState(4);
  const [filterText, setFilterText] = useState("");

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredNotes = currentNotes.filter((note) =>
    note.text.toLowerCase().includes(filterText.toLowerCase())
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Notlar</h2>
      <input
        type="text"
        value={filterText}
        onChange={handleFilterChange}
        placeholder="Notları filtrele..."
      />
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id} style={{ backgroundColor: note.color }}>
            {note.text}
            <button onClick={() => deleteNote(note.id)}>Sil</button>
          </li>
        ))}
      </ul>
      <Pagination
        notesPerPage={notesPerPage}
        totalNotes={notes.length}
        paginate={paginate}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes.notes,
});

export default connect(mapStateToProps, { deleteNote })(NoteList);

const Pagination = ({ notesPerPage, totalNotes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
