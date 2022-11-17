import React from "react";
import { Container, Content } from "./indexSidebar";
import {
  FaBriefcaseMedical,
  FaTooth,
  FaDog,
  FaArchway,
  FaCubes,
} from "react-icons/fa";

import { AiTwotoneExperiment } from "react-icons/ai";

import {
  BiExclude,
  BiBody,
  BiBookHeart,
  BiCube,
  BiCog,
  BiFridge,
  BiFile,
} from "react-icons/bi";

import SidebarItem from "../indexSidebarItem";
import { SidebarRoute2 } from "../../Sidebar/SidebarElements";

const Sidebar = ({ active }) => {
  // const closeSidebar = () => {
  //   active(false);
  // };

  return (
    <Container sidebar={active}>
      <Content>
        <SidebarRoute2 to="/odontologia">
          <SidebarItem Icon={FaTooth} Text="Odontologia" />
        </SidebarRoute2>

        <SidebarRoute2 to="/medicina">
          <SidebarItem Icon={FaBriefcaseMedical} Text="Medicina" />
        </SidebarRoute2>

        <SidebarRoute2 to="/medicinavet">
          <SidebarItem Icon={FaDog} Text="Medicina veterinária" />
        </SidebarRoute2>

        <SidebarRoute2 to="/laboratorio">
          <SidebarItem Icon={FaCubes} Text="Laboratório de prótese" />
        </SidebarRoute2>

        <SidebarRoute2 to="/diagnostico">
          <SidebarItem Icon={BiExclude} Text="Diagnóstico por imagem" />
        </SidebarRoute2>

        <SidebarRoute2 to="/farmacia">
          <SidebarItem
            Icon={AiTwotoneExperiment}
            Text="Farmácia / laboratório"
          />
        </SidebarRoute2>

        <SidebarRoute2 to="/saude">
          <SidebarItem Icon={BiBookHeart} Text="Estética e saúde " />
        </SidebarRoute2>

        <SidebarItem Icon={BiBody} Text="Fisioterapia " />
        <SidebarItem Icon={BiCube} Text="Peças e acessórios" />
        <SidebarItem Icon={BiFridge} Text="Móveis e decoração" />

        <SidebarItem Icon={BiFile} Text="Crie sua lista" />
        <SidebarItem Icon={BiCog} Text="Assistência e manutenção" />
        <SidebarItem Icon={FaArchway} Text="Clínica (compra/venda)" />
      </Content>
    </Container>
  );
};

export default Sidebar;
