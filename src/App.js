// import { Route, Routes, Navigate } from "react-router-dom"; //AQUI CONSIGO TRANSITAR ENTRE MEUS TEMPLATES DE ACORDO COM AS ROTAS
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import OdontologiaPage from "./pages/Odontologia";
import MyfistAnimationPage from "./pages/myFirstAnimation"


function App() {
  return (
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/bouncing"  element={<OdontologiaPage />} />
        <Route path="/first_animation"  element={<MyfistAnimationPage />} />
      </Routes>

  );
}

export default App;
