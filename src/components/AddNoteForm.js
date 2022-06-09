import { useState } from "react";
import Button from "./Button";
import InputText from "./DataInput/InputText";

const AddNoteForm = ({ handlerSubmit }) => {
  const d = new Date();

  const [note, setNote] = useState({
    id: d.getTime(),
    title: "",
    body: "",
    createdAt: d.toISOString(),
    archived: false,
  });

  function handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setNote({ ...note, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (note !== {}) {
      handlerSubmit(note);
      setNote({
        id: d.getTime(),
        title: "",
        body: "",
        createdAt: d.toISOString(),
        archived: false,
      });
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
        <h1 className="text-2xl mb-1">Buat Catatan</h1>
        <p className="text-right mb-1">Sisa Karakter Judul: 50</p>
        <form onSubmit={handleSubmit}>
          <InputText
            placeholder="Ini adalah judul ..."
            name="title"
            onChange={handleInputChange}
            value={note.title}
          />
          <textarea
            className="textarea textarea-bordered my-3 w-full text-base"
            rows="9"
            placeholder="Tulis catatanmu disini ..."
            name="body"
            onChange={handleInputChange}
            value={note.body}
            required
          ></textarea>
          <Button type="submit" variant="default" className="w-full">
            Buat
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddNoteForm;
