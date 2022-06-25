import "../css/style.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

/*Images*/
import logotipoincommun from "../images/logotipoincommun.png";


class packsPersonalizados extends React.Component {
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
                <b>O que pretende em específico?</b>
              </h1>
            </div>
          </div>
        </div>



        <form class="col-lg-6 offset-lg-3">
          <h1 class="mx-4 mt-5 display-6 ">
            <b>Gestão de redes Sociais</b>
          </h1>

          <div class="form-group mt-4">
            <label for="text">Quantas redes Sociais?</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-group mt-4">
            <label for="text">Quantos posts por semana?</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-check mt-4">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Stories incluídos
            </label>
          </div>

          <div class="form-check mt-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Acompanhamento
            </label>
          </div>

          <div class="form-check mt-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Relatório semanal
            </label>
          </div>



        </form >

        <form class="col-lg-6 offset-lg-3">
          <h1 class="mx-4 mt-5 display-6 ">
            <b>Publicidade on-line</b>
          </h1>

          <div class="form-group mt-4">
            <label for="text">Nome da marca</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-group mt-4">
            <label for="text">Divulgação por semana</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-check mt-4">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Sites
            </label>
          </div>

          <div class="form-check mt-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Apps
            </label>
          </div>

          <div class="form-check mt-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Vídeos publicitários
            </label>
          </div>
        </form >

        <form class="col-lg-6 offset-lg-3">
          <h1 class="mx-4 mt-5 display-6 ">
            <b>Branding</b>
          </h1>

          <div class="form-group mt-4">
            <label for="text">Nome da marca</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-group mt-4">
            <label for="text">Quantas cores</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-check mt-4">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Flyer/Cartão de visita
            </label>
          </div>

          <div class="form-check mt-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" />
            <label class="form-check-label" for="exampleRadios1">
              Cartaz
            </label>
          </div>

          <div class="form-check mt-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" />
            <label class="form-check-label" for="exampleRadios1">
              Merchandising
            </label>
          </div>
        </form >

        <form class="col-lg-6 offset-lg-3">
          <h1 class="mx-4 mt-5 display-6 ">
            <b>Lojas e site on-line</b>
          </h1>

          <div class="form-group mt-4">
            <label for="text">Nome da marca</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-group mt-4">
            <label for="text">Conteúdo por semana</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-check mt-4">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Anúncio de novos produtos
            </label>
          </div>

          <div class="form-check mt-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" />
            <label class="form-check-label" for="exampleRadios1">
              Divulgação em outros meios
            </label>
          </div>
        </form >

        <form class="col-lg-6 offset-lg-3">
          <h1 class="mx-4 mt-5 display-6 ">
            <b>Indique o seu endereço de email:</b>
          </h1>

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

export default packsPersonalizados;
