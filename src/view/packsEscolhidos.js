import "../css/style.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

import Navbar from "../component/Navbar";


/*Images*/
import logotipoincommun from "../images/logotipoincommun.png";


class packsEscolhidos extends React.Component {
  render() {
    return (
      <div className="wrapper ">
      <Navbar/>


        

        <div className="bg-amarelo py-5" >
          <div className="container-fluid">
            <div className="row mt-5">
              <h1 className="py-5 mt-5 display-3 text-center text-light">
                <b>O que pretende ter?</b>
              </h1>
            </div>
          </div>
        </div>

        <form className="col-lg-6 offset-lg-3">
          <h1 className="mx-4 mt-5 display-6 ">
            <b>Packs escolhidos</b>
          </h1>

          <div>
            <button type="button" className="btn btn-labeled btn-danger mx-2 gold-premium">Gold Premium</button>
            <button type="button" className="btn btn-labeled btn-danger rosa-normal">Rosa Normal</button>
          </div>


          <div className="form-group mt-4">
            <label for="text">Nome da marca</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group mt-4">
            <label for="text">Endereço de email</label>
            <input type="email" className="form-control" />
          </div>

        </form >

        <form className="col-lg-6 offset-lg-3">

          <h5 className="text-center mt-5">Ao fim de preencher este formulário e de o submeter,
            nós iremos avaliar e dar uma resposta brévia no prazo de 48 horas.
          </h5>
        </form >

        <div className="py-5 text-center">
          <button type="button" className="btn btn-primary text-center btnSubmeter">Submeter</button>
        </div>

        <div className="mt-5 bg-amarelo py-5" >
          <div className="container-fluid">
            <footer className="py-5 mt-5 bg-amarelo tx-branco">
              <div>
                <h5 className="text-center">Na incommun</h5>
                <h1 className="text-center footer-text">damos vida ao</h1>
                <h1 className="text-center footer-text">seu negócio.</h1>
              </div>
              <div className="container-fluid" />
              <div className="row justify-content-between">
                <div className="mx-5 mt-5 col-4 col-lg-2">
                  <h6>Política de Privacidade</h6>
                </div>
                <div className="mt-5 col-8 col-lg-5 text-right">
                  <h6 className="">@ 2022 incommun creative lab All rights reserved</h6>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div >

    );
  }
}

export default packsEscolhidos;
