import React from "react";

const Notes = (props) => {
  const deleteNote = () => {
    props.delete(props.id);
  };

  return (
    <>
      <div className="outer_note">
        <div className="note">
          <h3 id="demo1">{props.title}</h3>
          <p id="demo2">{props.content}</p>
          <div className=" set_btn">
            <i
              onClick={deleteNote}
              className="fas fa-trash text-danger fa-2x"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Notes;
