import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const LoginEcadastrodiv = styled.div`
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

  /* centralizar os lementos  */
  justify-content: center;
  align-items: center;
  color: white;

  /* CSS reset */
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  /* remove a linha dos links */
  a {
    text-decoration: none;
  }

  /* esconde as ancoras da tela */
  a.links {
    display: none;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 48px;
    color: white;
    padding: 2px 0 10px 0;
    font-family: Arial, sans-serif;
    font-weight: bold;
    text-align: center;
    padding-bottom: 30px;
  }

  p {
    margin-bottom: 15px;
  }

  .content p:first-child {
    margin: 0px;
  }

  label {
    position: relative;
  }

  /* placeholder */
  ::-webkit-input-placeholder {
    color: #bebcbc;
    font-style: italic;
  }

  input:-moz-placeholder,
  textarea:-moz-placeholder {
    color: #bebcbc;
    font-style: italic;
  }

  input {
    outline: none;
  }

  /*estilo dos input,  menos o checkbox */
  input:not([type="checkbox"]) {
    width: 95%;
    margin-top: 4px;
    padding: 10px;
    border: 1px solid #b2b2b2;

    -webkit-border-radius: 3px;
    border-radius: 3px;

    -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
    box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;

    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  /*estilo do botão submit */
  input[type="submit"] {
    border-radius: 50px;
    background-color: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 12px;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #010606;
    }

    @media screen and (max-width: 910px) {
      font-size: 12px;
      padding: 5px 19px;
    }
  }

  /*estilo do botão submit no hover */
  input[type="submit"]:hover {
    background: white;
    color: black;
  }

  .link {
    margin-top: 2rem;
    position: flex;
    color: #ffffff;

    font-size: 16px;

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
  }

  .link a {
    font-weight: bold;
    background: #f7f8f1;
    padding: 6px;
    color: rgb(20, 20, 20);
    margin-left: 10px;
    border: 1px solid #cbd518;

    -webkit-border-radius: 4px;
    border-radius: 4px;

    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
  }

  .link a:hover {
    color: black;
    background: #01bf71;
    border: 1px solid #4ab3c6;
  }

  @media screen and (max-width: 765px) {
    text-align: center;
    h1 {
      font-size: 2rem;
      color: white;
      padding: 2px 0 10px 0;
      font-family: Arial, sans-serif;
      font-weight: bold;
      padding-bottom: 30px;
    }

    label {
      font-size: 1rem;
    }

    /* placeholder */
    ::-webkit-input-placeholder {
      color: #bebcbc;
      font-style: italic;
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: #bebcbc;
      font-style: italic;
    }

    input {
      outline: none;
    }

    form {
      text-align: center;
      justify-content: center;
      align-items: center;
    }

    /*estilo dos input,  menos o checkbox */
    input:not([type="checkbox"]) {
      justify-content: center;
      display: flex;
      text-align: center;
      width: 10rem;
      margin-top: 4px;
      padding: 6px;
      border: 1px solid #b2b2b2;
    }

    /*estilo do botão submit */
    input[type="submit"] {
      border-radius: 50px;
      background-color: #01bf71;
      white-space: nowrap;
      padding: 10px 22px;
      color: #010606;
      font-size: 16px;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      text-decoration: none;

      &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
      }

      @media screen and (max-width: 910px) {
        font-size: 12px;
        padding: 5px 19px;
      }
    }

    /*estilo do botão submit no hover */
    input[type="submit"]:hover {
      background: white;
      color: black;
    }

    .link {
      display: inline-grid;
    }

    .link a {
      font-weight: bold;
      background: #f7f8f1;
      padding-top: 10px;
      margin-top: 10px;
      color: rgb(20, 20, 20);
      margin-left: 10px;
      border: 1px solid #cbd518;
    }

    .link a:hover {
      color: black;
      background: #01bf71;
      border: 1px solid #4ab3c6;
    }
  }
`;

const LoginEcadastro = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [login, setLogin] = useState(false);

  const Logintoggle = () => {
    setLogin(!login);
    console.log("aaaa");
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LoginEcadastrodiv>
        <div className="content">
          {login && (
            <div id="login">
              <form method="post" action="">
                <h1>Login</h1>
                <p>
                  <label for="nome_login">Seu nome</label>
                  <input
                    id="nome_login"
                    name="nome_login"
                    required="required"
                    type="text"
                    placeholder="ex. contato@htmlecsspro.com"
                  />
                </p>

                <p>
                  <label for="email_login">Seu e-mail</label>
                  <input
                    id="email_login"
                    name="email_login"
                    required="required"
                    type="password"
                    placeholder="ex. senha"
                  />
                </p>
                <NavLink to="/home">
                  <p>
                    <input type="submit" value="Logar" />
                  </p>
                </NavLink>

                <p className="link">
                  Ainda não tem conta?
                  <a href="#cadastro" onClick={Logintoggle}>
                    Cadastre-se
                  </a>
                </p>
              </form>
            </div>
          )}

          {!login && (
            <div id="cadastro">
              <form method="post" action="">
                <h1>Cadastro</h1>

                <p>
                  <label for="nome_cad">Seu nome</label>
                  <input
                    id="nome_cad"
                    name="nome_cad"
                    required="required"
                    type="text"
                    placeholder="nome"
                  />
                </p>

                <p>
                  <label for="email_cad">Seu e-mail</label>
                  <input
                    id="email_cad"
                    name="email_cad"
                    required="required"
                    type="email"
                    placeholder="contato@htmlecsspro.com"
                  />
                </p>

                <p>
                  <label for="senha_cad">Sua senha</label>
                  <input
                    id="senha_cad"
                    name="senha_cad"
                    required="required"
                    type="password"
                    placeholder="ex. 1234"
                  />
                </p>
                <NavLink to="/home">
                  <p>
                    <input type="submit" value="Cadastrar" />
                  </p>
                </NavLink>

                <p className="link">
                  Já tem conta?
                  <a href="#login" onClick={Logintoggle}>
                    {" "}
                    Ir para Login{" "}
                  </a>
                </p>
              </form>
            </div>
          )}
        </div>
      </LoginEcadastrodiv>
    </>
  );
};
export default LoginEcadastro;
