import SearchComponent from "../search";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarMenu,
  SidebarRoute2,
  SidebarWrapper,
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
          <SidebarRoute2 to="/test_tela" onClick={toggle}>
            tela config
          </SidebarRoute2>

          <SidebarRoute2 to="/carrosel" onClick={toggle}>
            carrosel
          </SidebarRoute2>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
