import React, { CSSProperties } from "react";

function Header() {
  return (
    <div style={rootStyle}>
      <h1 style={titleStyle}>React Playground</h1>
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

export default Header;
