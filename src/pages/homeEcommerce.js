import React, { useState } from "react";

import IndexPage from "../components/indexPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SimpleTabs from "../components/Componentes/tabComponent";
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
        <div
          style={{ background: "black", color: "white", textAlign: "center" }}
        >
          <SimpleTabs />
        </div>
      </div>
    </>
  );
};

export default HomeEcommerce;
