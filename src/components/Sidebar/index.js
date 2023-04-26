import React from "react";
import SearchComponent from "../search";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute2,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SearchComponent />
          <SidebarRoute2 to="/bouncing" onClick={toggle}>
          Bouncing
          </SidebarRoute2>
          <SidebarRoute2 to="/first_animation" onClick={toggle}>
            First animation
          </SidebarRoute2>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
