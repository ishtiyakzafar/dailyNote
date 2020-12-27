import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Createnotes from "./component/Createnotes";
import Notes from "./component/Notes";

const App = () => {
  const [newNote, setNewNote] = useState(() => {
   const localData = localStorage.getItem("note");
   return localData ? JSON.parse(localData) : []
  });

  const addData = (note) => {
    setNewNote((oldData) => {
      return [...oldData, note];
    });
  };

  const delNote = (id) => {
    setNewNote((oldarr) =>
      oldarr.filter((val, index) => {
        return index !== id;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(newNote));
  }, [newNote]);

  return (
    <>
      <Header />
      <Createnotes passData={addData} />
      {newNote.map((curval, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={curval.title}
            content={curval.content}
            delete={delNote}
          />
        );
      })}
    </>
  );
};
export default App;
