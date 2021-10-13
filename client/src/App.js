import { useEffect, useState } from "react";
import NoteContent from "./components/NoteContent";
import Navbar from "./components/Navbar";
import axios from "./utils/axios";

function App() {
  const [note, setNote] = useState({ content: "", _id: "" })
  const [notesList, setNotesList] = useState([])

  useEffect(() => {
    axios.get("/notes").then(response => {
      setNotesList(response.data)
    })
  }, [])

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-200 md:h-full md:flex-row">
      <Navbar note={ note } notesList={ notesList } setNote={ setNote } setNotesList={ setNotesList } />
      <NoteContent note={ note } setNotesList={ setNotesList } setNote={ setNote } />
    </div>
  );
}

export default App;
