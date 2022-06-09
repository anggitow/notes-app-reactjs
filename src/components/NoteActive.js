import Card from "./Card";
import { showFormattedDate } from "../utils";

const NoteActive = ({ notes, handlerArchive, handlerDeleteActive }) => {
  const updateData = (id) => {
    const updatedData = notes.map((data) =>
      data.id === id ? { ...data, archived: true } : data
    );
    handlerArchive(updatedData);
  };

  const deleteData = (id) => {
    const deletedData = notes.filter((data) => data.id !== id);
    handlerDeleteActive(deletedData);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full sm:w-10/12 md:w-9/12">
        <h1 className="text-2xl my-2">Catatan Aktif</h1>
        {notes.filter((note) => note.archived === false).length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {notes
              .filter((note) => note.archived === false)
              .map((data) => {
                return (
                  <Card
                    key={data.id}
                    title={data.title}
                    body={data.body}
                    createdAt={showFormattedDate(data.createdAt)}
                    archived={data.archived}
                    onClick={() => updateData(data.id)}
                    onDelete={() => deleteData(data.id)}
                  />
                );
              })}
          </div>
        ) : (
          <div className="text-center">Tidak ada catatan</div>
        )}
      </div>
    </div>
  );
};

export default NoteActive;
