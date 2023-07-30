import React from "react";
import NavBar from "./navbar";
import { styled } from "@mui/system";

export const PageContent = styled("div")({
  marginTop: "50px",
});

const Ui = ({ children }) => {
  return (
    <>
      <NavBar />
      <PageContent>{children}</PageContent>
    </>
  );
};

export default Ui;
