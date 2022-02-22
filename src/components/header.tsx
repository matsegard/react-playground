import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={rootStyle}>
      <Link to="/" style={linkStyle}>
        <h1 style={titleStyle}>React Playground</h1>
      </Link>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#111",
  color: "#eee",
  padding: "1rem",
};

const titleStyle: CSSProperties = {
  margin: 0,
};

const linkStyle: CSSProperties = {
  color: "#eee",
  textDecoration: "none",
};

export default Header;
