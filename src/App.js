import { useState } from "react";
import "./App.css";
import AddNoteForm from "./components/AddNoteForm";
import Layout from "./components/Layout";
import NoteActive from "./components/NoteActive";
import NoteArchived from "./components/NoteArchived";
import { getInitialData } from "./utils";

function App() {
  const initialData = getInitialData();
  const [data, setData] = useState(initialData);

  function addNote(note) {
    setData([...data, note]);
  }

  function moveToArchive(newData) {
    // console.log(newData);
    setData(newData);
  }
  // console.log(data);

  return (
    <Layout>
      <main className="px-4 md:px-10 my-7 flex-auto">
        <AddNoteForm handlerSubmit={addNote} />
        <NoteActive notes={data} handlerArchive={moveToArchive} />
        <NoteArchived archivedNotes={data} />
      </main>
    </Layout>
  );
}

export default App;
