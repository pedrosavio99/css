import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ExemplePage from "../components/ExemplePage";
import IndexPage from "../components/indexPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CodeCopyComponent from "../components/CodeCopyElement";

const HomeEcommerce = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div style={{ background: "black" }}>
        <IndexPage />
        <CodeCopyComponent />
      </div>
    </>
  );
};

export default HomeEcommerce;
