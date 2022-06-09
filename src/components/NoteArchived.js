import Card from "./Card";
import { showFormattedDate } from "../utils";

const NoteArchived = ({ archivedNotes }) => {
  const datas = archivedNotes.filter(
    (archivedNote) => archivedNote.archived == true
  );
  return (
    <div className="flex justify-center mt-8">
      <div className="w-full sm:w-10/12 md:w-9/12">
        <h1 className="text-2xl my-2">Arsip</h1>
        {datas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {datas
              .filter((data) => data.archived == true)
              .map((data) => {
                return (
                  <Card
                    key={data.id}
                    title={data.title}
                    body={data.body}
                    createdAt={showFormattedDate(data.createdAt)}
                    archived={data.archived}
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
