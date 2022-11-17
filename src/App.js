// import { Route, Routes, Navigate } from "react-router-dom"; //AQUI CONSIGO TRANSITAR ENTRE MEUS TEMPLATES DE ACORDO COM AS ROTAS
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import DiagnosticoPage from "./pages/Diagnostico";
import FarmaciaPage from "./pages/Farmacia";
import HomeEcommerce from "./pages/homeEcommerce";
import LaboratorioPage from "./pages/Laboratorio";
import LoginEcadastro from "./pages/loginEcadastro";
import MedicinaPage from "./pages/Medicina";
import MedicimaVeterinaria from "./pages/MedicinaVet";
import OdontologiaPage from "./pages/Odontologia";
import QueroVender from "./pages/QueroVender";
import SaudePage from "./pages/Saude";


function App() {
  return (
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/home"  element={<HomeEcommerce />} />
        <Route path="/login"  element={<LoginEcadastro />} />
        <Route path="/vendas"  element={<QueroVender />} />
        <Route path="/odontologia"  element={<OdontologiaPage />} />
        <Route path="/medicina"  element={<MedicinaPage />} />
        <Route path="/medicinavet"  element={<MedicimaVeterinaria />} />
        <Route path="/laboratorio"  element={<LaboratorioPage />} />
        <Route path="/diagnostico"  element={<DiagnosticoPage />} />
        <Route path="/farmacia"  element={<FarmaciaPage />} />
        <Route path="/saude"  element={<SaudePage />} />
      </Routes>

  );
}

export default App;
