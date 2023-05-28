import { BiBarChart, BiFile } from "react-icons/bi";
import { Container, Content } from "./indexSidebar";

import { SidebarRoute2 } from "../../Sidebar/SidebarElements";
import SidebarItem from "../indexSidebarItem";

const Sidebar = ({ active }) => {
  return (
    <Container sidebar={active}>
      <Content>
        <SidebarRoute2 to="/bouncing">
          <SidebarItem Icon={BiFile} Text="Bouncing" />
        </SidebarRoute2>

        <SidebarRoute2 to="/first_animation">
          <SidebarItem Icon={BiBarChart} Text="First Animation" />
        </SidebarRoute2>

        <SidebarRoute2 to="/test_tela">
          <SidebarItem Icon={BiBarChart} Text="config tela" />
        </SidebarRoute2>

        <SidebarRoute2 to="/carrosel">
          <SidebarItem Icon={BiBarChart} Text="carrosel" />
        </SidebarRoute2>
      </Content>
    </Container>
  );
};

export default Sidebar;
