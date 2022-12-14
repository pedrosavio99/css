import React, { useEffect, useState } from "react";
import "./index.css";

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <div
      style={{
        background: "black",
        color: "white",
      }}
    >
      <div
        style={{
          background: "black",
          color: "white",
        }}
      >
        {tabsData.map(({ tab }, idx) => (
          <div className="nav-item">
            <p
              className={`nav-link ${idx === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </p>
          </div>
        ))}
      </div>

      <div className="tab-content p-3">
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;

export default Tab;
