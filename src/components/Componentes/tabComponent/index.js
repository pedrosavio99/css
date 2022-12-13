import Tab from "./Tab";
const tabContent = [
  { title: "1", content: "aaaaaa" },
  { title: "2", content: "bbbbbb" },
  { title: "3", content: "cccccc" },
];

const SimpleTabs = () => {
  return (
    <>
      <div title="Building simple Tab component in react" />
      <div className="row">
        <div className="col text-center">
          <h2>Tab Component</h2>
          <p>Building Tab component so falta estilizar </p>
          <div className="row text-left">
            <Tab active={1}>
                {
                   tabContent.map((tab,idx)=>(
                    <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>{tab.content}</Tab.TabPane>
                   ))
                }
            </Tab>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleTabs;
