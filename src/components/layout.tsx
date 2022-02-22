import React, { CSSProperties } from "react";
import Header from "./header";
import MainPage from "./pages/mainPage";
import { Route, Switch } from "react-router-dom";
import DetailPage from "./pages/detailPage";

function Layout() {
  return (
    <div style={rootStyle}>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/detail/:name" component={DetailPage} />
        <div>404</div>
      </Switch>
    </div>
  );
}

const rootStyle: CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export default Layout;
