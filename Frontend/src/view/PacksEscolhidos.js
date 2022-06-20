import "../css/style.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

/*Images*/
import logotipoincommun from "../images/logotipoincommun.png";


class packsEscolhidos extends React.Component {
  render() {
    return (
      <div class="wrapper ">


        <nav class="navbar navbar-expand-lg navbar-light bg-amareloesverdeado fixed-top py-3">
          <div class="container-fluid">
            <Link to="/" class="col-6 col-sm-2">
              <img src={logotipoincommun} class="mx-4 navbar-brand w-75" alt="logotipoincommun" />
            </Link>

            <div class=" col-lg-d-flex">
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav list-group ">
                  <li class="nav-item active mx-3">
                    <Link class="nav-link h3 text-white">
                      Menu
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </nav>

        <div class="bg-amarelo py-5" >
          <div class="container-fluid">
            <div class="row mt-5">
              <h1 class="py-5 mt-5 display-3 text-center text-light">
                <b>O que pretende ter?</b>
              </h1>
            </div>
          </div>
        </div>

        <form class="col-lg-6 offset-lg-3">
          <h1 class="mx-4 mt-5 display-6 ">
            <b>Packs escolhidos</b>
          </h1>

          <div>
            <button type="button" class="btn btn-labeled btn-danger mx-2 gold-premium">Gold Premium</button>
            <button type="button" class="btn btn-labeled btn-danger rosa-normal">Rosa Normal</button>
          </div>


          <div class="form-group mt-4">
            <label for="text">Nome da marca</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-group mt-4">
            <label for="text">Endereço de email</label>
            <input type="email" class="form-control" />
          </div>

        </form >

        <form class="col-lg-6 offset-lg-3">

          <h5 class="text-center mt-5">Ao fim de preencher este formulário e de o submeter,
            nós iremos avaliar e dar uma resposta brévia no prazo de 48 horas.
          </h5>
        </form >

        <div class="py-5 text-center">
          <button type="button" class="btn btn-primary text-center btnSubmeter">Submeter</button>
        </div>

        <div class="mt-5 bg-amarelo py-5" >
          <div class="container-fluid">
            <footer class="py-5 mt-5 bg-amarelo tx-branco">
              <div>
                <h5 class="text-center">Na incommun</h5>
                <h1 class="text-center footer-text">damos vida ao</h1>
                <h1 class="text-center footer-text">seu negócio.</h1>
              </div>
              <div class="container-fluid" />
              <div class="row justify-content-between">
                <div class="mx-5 mt-5 col-4 col-lg-2">
                  <h6>Política de Privacidade</h6>
                </div>
                <div class="mt-5 col-8 col-lg-5 text-right">
                  <h6 class="">@ 2022 incommun creative lab All rights reserved</h6>
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
