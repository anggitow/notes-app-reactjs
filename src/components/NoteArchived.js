import Card from "./Card";
import { showFormattedDate } from "../utils";

const NoteArchived = ({
  archivedNotes,
  handlerActive,
  handlerDeleteArchive,
}) => {
  const updateData = (id) => {
    const updatedData = archivedNotes.map((data) =>
      data.id === id ? { ...data, archived: false } : data
    );
    handlerActive(updatedData);
  };

  const deleteData = (id) => {
    const deletedData = archivedNotes.filter((data) => data.id !== id);
    handlerDeleteArchive(deletedData);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full sm:w-10/12 md:w-9/12">
        <h1 className="text-2xl my-2">Arsip</h1>
        {archivedNotes.filter((archivedNote) => archivedNote.archived === true)
          .length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {archivedNotes
              .filter((data) => data.archived === true)
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

export default NoteArchived;
