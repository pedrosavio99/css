import React, { useState } from "react";
import SimpleStarRate from "../components/Componentes/qualqueroutro";
import IndexPage from "../components/indexPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SimpleTabs from "../components/Componentes/tabComponent";

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
        <div
          style={{
            background: "black",
            color: "white",
            textAlign: "center",
            height: "100vh",
          }}
        >
          <SimpleTabs />
          <SimpleStarRate />
        </div>
      </div>
    </>
  );
};

export default HomeEcommerce;
