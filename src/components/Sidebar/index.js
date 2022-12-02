import React from "react";
import SearchComponent from "../search";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
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
          <SidebarRoute2 to="/medicina" onClick={toggle}>
            Medicina
          </SidebarRoute2>
          <SidebarRoute2 to="/medicinavet" onClick={toggle}>
            Medicina veterinária
          </SidebarRoute2>
          <SidebarRoute2 to="/laboratorio" onClick={toggle}>
            Laboratório de prótese
          </SidebarRoute2>
          <SidebarRoute2 to="/diagnostico" onClick={toggle}>
            Diagnóstico por imagem
          </SidebarRoute2>
          <SidebarRoute2 to="/farmacia" onClick={toggle}>
            Farmácia / laboratório
          </SidebarRoute2>
          <SidebarRoute2 to="/saude" onClick={toggle}>
            Estética e saúde{" "}
          </SidebarRoute2>
          <SidebarLink to="about" onClick={toggle}>
            Fisioterapia{" "}
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Peças e acessórios
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Móveis e decoração
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Crie sua lista
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Assistência e manutenção
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Clínica (compra/venda)
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
