import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Content from "./Content";
import Moodbased from "./Moodbased";
import Animated from "./Animated";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Content />
      <Moodbased />
      <Animated />
    </>
  );
};

export default MainPage;
