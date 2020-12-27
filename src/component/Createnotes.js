import React, { useState } from "react";

const Createnotes = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const enterData = (event) => {
    const { name, value } = event.target;
    setnote((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const submitData = () => {
    const titlevalue = document.getElementById("demo").value;
    const contentvalue = document.getElementById("demo1").value;

    if (titlevalue === "" || contentvalue === "") {
      alert("make note");
      return false;
    }

    props.passData(note);

    setnote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="addBtn d-flex justify-content-center">
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Write a note
        </button>
      </div>
      <div className="collapse" id="collapseExample">
        <div className=" ">
          <div className="main_note">
            <div className="cretenote">
              <input
                name="title"
                onChange={enterData}
                type="text"
                id="demo"
                autoComplete="off"
                value={note.title}
                placeholder="Title"
              />

              <textarea
                onChange={enterData}
                name="content"
                row=""
                cols=""
                id="demo1"
                value={note.content}
                placeholder="Note..."
              />

              <div className="setbtn">
                <i
                  onClick={submitData}
                  className="fas fa-plus text-success fa-2x"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Createnotes;
