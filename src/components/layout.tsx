import React, { CSSProperties } from "react";
import Header from "./header";
import Main from "./main";

function Layout() {
  return (
    <div style={rootStyle}>
      <Header />
      <Main />
    </div>
  );
}

const rootStyle: CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export default Layout;
