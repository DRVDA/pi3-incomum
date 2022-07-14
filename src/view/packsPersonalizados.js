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
      <div className="wrapper ">


        

        <div className="bg-amarelo py-5" >
          <div className="container-fluid">
            <div className="row mt-5">
              <h1 className="py-5 mt-5 display-3 text-center text-light">
                <b>O que pretende em específico?</b>
              </h1>
            </div>
          </div>
        </div>



        <form className="col-lg-6 offset-lg-3">
          <h1 className="mx-4 mt-5 display-6 ">
            <b>Gestão de redes Sociais</b>
          </h1>

          <div className="form-group mt-4">
            <label for="text">Quantas redes Sociais?</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group mt-4">
            <label for="text">Quantos posts por semana?</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-check mt-4">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" for="exampleRadios1">
              Stories incluídos
            </label>
          </div>

          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" for="exampleRadios1">
              Acompanhamento
            </label>
          </div>

          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" for="exampleRadios1">
              Relatório semanal
            </label>
          </div>



        </form >

        <form className="col-lg-6 offset-lg-3">
          <h1 className="mx-4 mt-5 display-6 ">
            <b>Publicidade on-line</b>
          </h1>

          <div className="form-group mt-4">
            <label for="text">Nome da marca</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group mt-4">
            <label for="text">Divulgação por semana</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-check mt-4">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" for="exampleRadios1">
              Sites
            </label>
          </div>

          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" for="exampleRadios1">
              Apps
            </label>
          </div>

          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" for="exampleRadios1">
              Vídeos publicitários
            </label>
          </div>
        </form >

        <form className="col-lg-6 offset-lg-3">
          <h1 className="mx-4 mt-5 display-6 ">
            <b>Branding</b>
          </h1>

          <div className="form-group mt-4">
            <label for="text">Nome da marca</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group mt-4">
            <label for="text">Quantas cores</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-check mt-4">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" for="exampleRadios1">
              Flyer/Cartão de visita
            </label>
          </div>

          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" />
            <label className="form-check-label" for="exampleRadios1">
              Cartaz
            </label>
          </div>

          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" />
            <label className="form-check-label" for="exampleRadios1">
              Merchandising
            </label>
          </div>
        </form >

        <form className="col-lg-6 offset-lg-3">
          <h1 className="mx-4 mt-5 display-6 ">
            <b>Lojas e site on-line</b>
          </h1>

          <div className="form-group mt-4">
            <label for="text">Nome da marca</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group mt-4">
            <label for="text">Conteúdo por semana</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-check mt-4">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" for="exampleRadios1">
              Anúncio de novos produtos
            </label>
          </div>

          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" />
            <label className="form-check-label" for="exampleRadios1">
              Divulgação em outros meios
            </label>
          </div>
        </form >

        <form className="col-lg-6 offset-lg-3">
          <h1 className="mx-4 mt-5 display-6 ">
            <b>Indique o seu endereço de email:</b>
          </h1>

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

export default packsPersonalizados;
