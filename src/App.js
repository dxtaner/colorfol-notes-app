// components/App.js
import React from "react";
import NoteList from "./components/NoteList.js";
import NoteForm from "./components/NoteForm.js";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>React ve Redux Not Uygulaması</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;
