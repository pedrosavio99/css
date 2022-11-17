// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const QueroVenderdiv = styled.div`
  /* cor da div pegar em toda a pagina */
  padding: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background-color: black;
  padding: 5rem;
  color: white;
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
  @import url(https://fonts.googleapis.com/css?family=Pacifico);
  * {
    font-size: 16px;
  }
  input:focus,
  button:focus {
    outline: none;
  }
  button:hover,
  .reset:hover {
    opacity: 0.8;
  }
  button:active,
  .reset:active {
    opacity: 0.5;
  }
  .container {
    padding: 1rem;
    width: 100%;
    margin-left: -0.7rem;
    /* position: flex; */
    background-color: black;
  }
  .steps {
    margin-bottom: 10px;
    position: relative;
    height: 25px;
  }
  .steps > div {
    position: absolute;
    top: 0;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
    height: 25px;
    padding: 0 5px;
    display: inline-block;
    width: 80px;
    text-align: center;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
  }
  .steps > div > span {
    line-height: 25px;
    height: 25px;
    margin: 0;
    color: #777;
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
  }
  .steps > div > .liner {
    position: absolute;
    height: 2px;
    width: 0%;
    left: 0;
    top: 50%;
    margin-top: -1px;
    background: black;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
  }
  .step-one {
    left: 0;
  }

  .line {
    width: 100%;
    height: 5px;
    background: #dddddd;
    position: relative;
    border-radius: 10px;
    overflow: visible;
    margin-bottom: 50px;
  }
  .line .dot-move {
    position: absolute;
    top: 50%;
    left: 0%;
    width: 15px;
    height: 15px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #08bb3d;
    border-radius: 50%;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
  }

  .line .dot-move2 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px;
    height: 15px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #08bb3d;
    border-radius: 50%;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
  }

  .line .dot-move3 {
    position: absolute;
    top: 50%;
    left: 100%;
    width: 15px;
    height: 15px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #08bb3d;
    border-radius: 50%;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
  }
  .line .dot {
    position: absolute;
    top: 50%;
    width: 15px;
    height: 15px;
    left: 0;
    background: #ddd;
    border-radius: 50%;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
    -webkit-transform: translate(-50%, -50%) scale(0.5);
    -ms-transform: translate(-50%, -50%) scale(0.5);
    transform: translate(-50%, -50%) scale(0.5);
  }
  .line .dot.zero {
    left: 0%;
    background: #bbb;
  }
  .container.slider-one-active .dot.zero {
    background: #5892fc;
  }
  .line .dot.center {
    left: 50%;
    background: #bbb;
  }
  .line .dot.full {
    left: 100%;
    background: #bbb;
  }
  .slider-ctr {
    /* width: 30vmax; */
    padding-left: 20%;
    padding-right: 20%;
    overflow: hidden;
    @media screen and (max-width: 700px) {
      padding-left: 0%;
      padding-right: 0%;
    }
  }

  .step-one {
    left: 0;
  }
  .step-one2 {
    left: 50%;
    /* clip: rect(0, 0px, 25px, 0px); */
  }
  .step-one3 {
    left: 100%;
    /* clip: rect(0, 0px, 25px, 0px); */
  }

  .slider {
    /* overflow: hidden;
    width: 1200px;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
    -webkit-transform: translate(0px) scale(1);
    -ms-transform: translate(0px) scale(1);
    transform: translate(0px) scale(1); */
  }
  .container.slider-one-active .slider-two,
  .container.slider-one-active .slider-three {
    /* -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5); */
  }
  .container.slider-two-active .slider-one,
  .container.slider-two-active .slider-three {
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
  }
  .container.slider-three-active .slider-one,
  .container.slider-three-active .slider-two {
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
  }
  .slider-one,
  .slider-two,
  .slider-three {
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
  }
  .slider-form {
    /* float: left; */
    /* width: 100%; */
    text-align: center;
  }
  .slider-form h2 {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    margin-bottom: 25px;
    color: white;
    background-color: black;
    position: relative;
  }
  .slider-form h2 .yourname {
    font-weight: 400;
  }
  .slider-form h3 {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    margin-bottom: 25px;
    line-height: 1.5;
    color: #999;
    position: relative;
  }
  .slider-form h3 .balapa {
    font-family: "Pacifico", sans-serif;
    display: inline-block;
    color: #5892fc;
    text-decoration: none;
  }
  .slider-form [type="text"] {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    background: #fafafa;
    border: 1px solid transparent;
    color: #777;
    border-radius: 50px;
    margin-bottom: 50px;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    position: relative;
    /* z-index: 99; */
  }

  .slider-form [type="password"] {
    margin-top: 5px;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    background: #fafafa;
    border: 1px solid transparent;
    color: #777;
    border-radius: 50px;
    margin-bottom: 50px;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    position: relative;
    /* z-index: 99; */
  }

  .slider-form [type="number"] {
    margin-top: 5px;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    background: #fafafa;
    border: 1px solid transparent;
    color: #777;
    border-radius: 50px;
    margin-bottom: 50px;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    position: relative;
    /* z-index: 99; */
  }
  .slider-form [type="text"]:focus {
    background: #fcfcfc;
    border: 1px solid #ddd;
  }
  .slider-form [type="password"]:focus {
    background: #fcfcfc;
    border: 1px solid #ddd;
  }
  .slider-form button,
  .reset {
    display: inline-block;
    text-decoration: none;
    background: #08a054;
    margin-top: 1rem;
    margin-right: 15px;
    border: none;
    color: black;
    padding: 10px 25px;
    font-size: 1rem;
    border-radius: 12px;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    position: relative;
  }
  /*  emot */
  .label-ctr {
    margin-bottom: 50px;
  }
  label {
    height: 55px;
    width: 100%;
    display: inline-block;
    /* margin: 0 10px; */
    background: transparent;
    /* position: relative; */
    border-radius: 50%;
    cursor: pointer;
  }
  label.radio input {
    visibility: hidden;
  }
  label.radio input:checked + .emot {
    -webkit-transform: scale(1.25);
    -ms-transform: scale(1.25);
    transform: scale(1.25);
  }
  label.radio input:checked + .emot,
  label.radio input:checked + .emot .mouth {
    border-color: #5892fc;
  }
  label.radio input:checked + .emot:before,
  label.radio input:checked + .emot:after {
    background: #5892fc;
  }
  .file {
    /* width: 100%; */
    height: 200px;
    border: 4px dashed #fff;
    @media screen and (max-width: 700px) {
      width: 90%;
    }
  }
  .file p {
    /* width: 100%;
    height: 100%; */
    text-align: center;
    /* line-height: 170px; */
    color: #ffffff;
    font-family: Arial;
  }
  .file input {
    /* position: absolute; */
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
  }
  .file button {
    margin: 0;
    color: transparent;
    cursor: none;
    background: transparent;
    border: none;
    width: 508px;
    height: 35px;
    margin-top: -20px;
    margin-left: -4px;
    border-radius: 4px;
    border-bottom: 4px solid transparent;
    transition: all 0.2s ease;
    outline: none;
  }
  .file button:hover {
    background: transparent;
    color: transparent;
  }
  .file button:active {
    border: 0;
  }

  .radio {
    margin-top: 30px;
    display: block;
    cursor: pointer;
    user-select: none;
    /* text-align: left; */
    & + .radio {
      margin-top: 12px;
    }
    input {
      display: none;
      & + span {
        /* display: inline-block; */
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;

          border-radius: 50%;
          margin-right: 5px;
          width: 16px;
          height: 16px;
          border: 1px solid #ccc;
          background: #fff;
        }
        &:after {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          background: #222;
          position: absolute;
          border-radius: 50%;
          top: 3px;
          left: 3px;
          opacity: 0;
          transform: scale(0, 0);
          transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
        }
      }
      &:checked + span:after {
        opacity: 1;
        transform: scale(1, 1);
      }
    }
  }
`;

const QueroVender = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [preco2, setpreco] = useState(0);

  let [state, setState2] = useState({
    nome: "",
    categoria: "",
    // preco: preco2,
    estado: "",
    descricao: "",
    senha: "",
  });
  const { nome, categoria, estado, descricao, senha } = state;
  const values = { nome, categoria, estado, descricao, senha };

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChange = ({ currentTarget: input }) => {
    setState2({ ...state, [input.name]: input.value });
  };

  const handleChange2 = ({ currentTarget: input }) => {
    setpreco(input.value);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <QueroVenderdiv>
        <form>
          {step === 1 && (
            <div class="container">
              <div class="steps">
                <div class="step step-one">
                  <div class="liner"></div>
                  <span>Cadastro!</span>
                </div>
              </div>
              <div class="line">
                <div class="dot-move"></div>
                <div class="dot zero"></div>
                <div class="dot center"></div>
                <div class="dot full"></div>
              </div>

              <div class="slider-ctr">
                <div class="slider">
                  <form class="slider-form slider-one">
                    <h2>Cadastro de produto</h2>
                    <label class="input">
                      <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        class="input"
                        value={values.nome}
                        onChange={handleChange}
                        required
                      />
                    </label>

                    <label class="input">
                      <input
                        type="text"
                        placeholder="Categoria"
                        value={values.categoria}
                        name="categoria"
                        onChange={handleChange}
                        required
                      />
                    </label>

                    <label class="input">
                      <input
                        type="text"
                        placeholder="Descricao"
                        value={values.descricao}
                        name="descricao"
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <button class="first next" onClick={nextStep}>
                      Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <div class="steps">
                <div class="step step-one2">
                  <div class="liner"></div>
                  <span>Verificação</span>
                </div>
              </div>
              <div class="line">
                <div class="dot-move2"></div>
                <div class="dot zero"></div>
                <div class="dot center"></div>
                <div class="dot full"></div>
              </div>

              <div class="slider-ctr">
                <div class="slider">
                  <form class="slider-form slider-one">
                    <h2>Detalhes do Produto</h2>
                    Preço
                    <label class="input">
                      <input
                        type="number"
                        placeholder="Preço"
                        value={preco2}
                        name="preco2"
                        onChange={handleChange2}
                        required
                      />
                    </label>

                    <label class="input">
                      <div class="file" action="upload.php" method="POST">
                        <p>Foto do produto</p>
                        <input
                          type="file"
                          class="file-upload-field"
                          placeholder="avatar"
                          value={values.preco}
                          accept="image/png, image/jpeg"
                          name="avatar"
                          onChange={handleChange}
                          required
                        />

                        <button type="submit">Upload</button>
                      </div>
                      <h2>Estado do Produto</h2>
                    </label>

                    <label class="radio">
                      {/* <h2>Estado do Produto</h2> */}
                      <input name="radio" type="radio" checked />
                      <span>Novo</span>
                    </label>
                    <label class="radio">
                      <input name="radio" type="radio" />
                      <span>Usado</span>
                    </label>

                    {/* <label class="input">
                      <input
                        type="text"
                        placeholder="Novo ou Usado"
                        name="estado"
                        value={values.estado}
                        onChange={handleChange}
                        required
                      />
                    </label> */}

                    <label class="input">
                      Digite sua Senha
                      <input
                        type="password"
                        value={values.senha}
                        name="senha"
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <button class="first next" onClick={prevStep}>
                      voltar
                    </button>
                    <button class="first next" onClick={nextStep}>
                      Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div class="steps">
                <div class="step step-one3">
                  <div class="liner"></div>
                  <span>Confirmação</span>
                </div>
              </div>
              <div class="line">
                <div class="dot-move3"></div>
                <div class="dot zero"></div>
                <div class="dot center"></div>
                <div class="dot full"></div>
              </div>
              <ul class="socials">
                <div class="slider-ctr">
                  <div class="slider">
                    <form class="slider-form slider-one">
                      <h2>Confira seu Anuncio</h2>

                      <label class="input2">
                        Nome
                        <input
                          type="text"
                          value={values.nome}
                          name="nome"
                          placeholder={state.nome}
                          required
                        />
                      </label>
                      <label class="input">
                        Categoria
                        <input
                          type="text"
                          value={values.categoria}
                          name="categoria"
                          placeholder={state.categoria}
                          required
                        />
                      </label>
                      <label class="input">
                        Descricao
                        <input
                          type="text"
                          value={values.descricao}
                          name="senha"
                          placeholder={state.descricao}
                          required
                        />
                      </label>
                      <label class="input">
                        Preço
                        <input
                          type="text"
                          value={preco2}
                          name="preco"
                          placeholder={preco2}
                          required
                        />
                      </label>

                      <button class="first next" onClick={prevStep}>
                        voltar
                      </button>

                      <NavLink to="/home">
                        <button class="first next">Tudo Certo!</button>
                      </NavLink>
      
                    </form>
                  </div>
                </div>
              </ul>
            </div>
          )}
        </form>
      </QueroVenderdiv>
    </>
  );
};
export default QueroVender;
