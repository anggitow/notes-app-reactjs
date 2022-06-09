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
  const [filter, setFilter] = useState("");

  const searchFilter = (search) => {
    setFilter(search);
  };

  const filtered = data.filter((dt) =>
    filter ? dt.title.toLowerCase().includes(filter.toLowerCase()) : data
  );

  return (
    <Layout handlerSearch={searchFilter}>
      <main className="px-4 md:px-10 my-7 flex-auto">
        <AddNoteForm handlerSubmit={(note) => setData([...data, note])} />
        <NoteActive
          notes={filtered}
          handlerArchive={(newData) => setData(newData)}
          handlerDeleteActive={(newData) => setData(newData)}
        />
        <NoteArchived
          archivedNotes={filtered}
          handlerActive={(newData) => setData(newData)}
          handlerDeleteArchive={(newData) => setData(newData)}
        />
      </main>
    </Layout>
  );
}

export default App;
