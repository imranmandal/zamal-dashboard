import React from "react";
import TopAndSideAppBar from "./TopAppBar";

const Layout = ({ children }) => {
  return (
    <>
      <TopAndSideAppBar>{children}</TopAndSideAppBar>
    </>
  );
};

export default Layout;
