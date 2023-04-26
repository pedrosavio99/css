import React from "react";
import { Container, Content } from "./indexSidebar";
import {
  BiFile,
  BiBarChart
} from "react-icons/bi";

import SidebarItem from "../indexSidebarItem";
import { SidebarRoute2 } from "../../Sidebar/SidebarElements";

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

      </Content>
    </Container>
  );
};

export default Sidebar;
