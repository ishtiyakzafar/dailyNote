import React from "react";
import notelogo from "./notelogo.png";

const Header = () => {
  return (
    <>
      <div className="set_header">
        <img src={notelogo} alt="logo.png" />
        <h1>daily notes</h1>
      </div>
    </>
  );
};
export default Header;
