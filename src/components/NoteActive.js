import Card from "./Card";
import { showFormattedDate } from "../utils";
// import { useState } from "react";

const NoteActive = ({ notes, handlerArchive }) => {
  const datas = notes.filter((note) => note.archived === false);

  // const [newData, setNewData] = useState(datas);

  const updateState = (id) => {
    const newState = datas.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id) {
        return { ...obj, archived: true };
      }

      // 👇️ otherwise return object as is
      return obj;
    });
    // setNewData(newState);
    handlerArchive(newState);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full sm:w-10/12 md:w-9/12">
        <h1 className="text-2xl my-2">Catatan Aktif</h1>
        {notes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {datas.map((data) => {
              return (
                <Card
                  key={data.id}
                  title={data.title}
                  body={data.body}
                  createdAt={showFormattedDate(data.createdAt)}
                  archived={data.archived}
                  onClick={() => updateState(data.id)}
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
