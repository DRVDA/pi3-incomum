import "../css/style.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

/*Images*/
import logotipoincommun from "../images/logotipoincommun.png";
import boxes from "../images/boxes.png";

class index extends React.Component {
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

              <img src={boxes} class="boxes-image" alt="boxes" />

              <div class="col-6 col-sm-5 margem-cima">
                <h1 class="display-3 text-center text-light">
                  <b>Packs para todos</b>
                </h1>
                <h1 class="display-3 text-center text-light">
                  <b>Packs para todos</b>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div class=" bg-branco pt-5">
          <div class="container-fluid">
            <div class="row justify-content-between">

              <div >
                <h1 class="mx-4 display-4 ">
                  <b>Packs predefinidos</b>
                </h1>

                <h1 class="mx-4">
                  <b>Marketing Digital</b>
                </h1>

                <div class=" mt-5 container-fluid">
                  <div class="row">
                    <div class="col-sm-12">
                      <div id="inam" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="container">
                              <div class="row ">

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-amarelo1 text-white" >
                                    <h1 class="text-center ">Normal</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input" type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-amarelo1 text-white" >
                                    <h1 class="text-center ">Premium</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input" type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-amarelo1 text-white" >
                                    <h1 class="text-center ">Lite</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input" type="checkbox" ></input>
                                  </div>
                                </div>

                              </div>
                            </div>

                          </div>
                          <div class="carousel-item">
                            <div class="container">
                              <div class="row">
                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-amarelo1 text-white" >
                                    <h1 class="text-center ">Boost</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input" type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-amarelo1 text-white" >
                                    <h1 class="text-center ">Boost2</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input" type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-amarelo1 text-white" >
                                    <h1 class="text-center ">Boost3</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input" type="checkbox" ></input>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                        </div>
                        <a href="#inam" class="carousel-control-prev" data-slide="prev">
                          <span class="carousel-control-prev-icon icon-color-amarelo1"></span>
                        </a>
                        <a href="#inam" class="carousel-control-next" data-slide="next">
                          <span class="carousel-control-next-icon icon-color-amarelo1"></span>
                        </a>

                      </div>

                    </div>

                  </div>

                </div>

                <h1 class="mx-4 mt-5">
                  <b>Design Gráfico</b>
                </h1>

                <div class=" mt-5 container-fluid">
                  <div class="row">
                    <div class="col-sm-12">
                      <div id="inam" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="container">
                              <div class="row ">

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-azul text-white" >
                                    <h1 class="text-center ">Normal</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-azul text-white" >
                                    <h1 class="text-center ">Premium</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-azul text-white" >
                                    <h1 class="text-center ">Lite</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                              </div>
                            </div>

                          </div>
                          <div class="carousel-item">
                            <div class="container">
                              <div class="row">
                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-azul text-white" >
                                    <h1 class="text-center ">Boost</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-azul text-white" >
                                    <h1 class="text-center ">Boost2</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-azul text-white" >
                                    <h1 class="text-center ">Boost3</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                        </div>
                        <a href="#inam" class="carousel-control-prev" data-slide="prev">
                          <span class="carousel-control-prev-icon icon-bg-azul"></span>
                        </a>
                        <a href="#inam" class="carousel-control-next" data-slide="next">
                          <span class="carousel-control-next-icon black icon-bg-azul"></span>
                        </a>

                      </div>

                    </div>

                  </div>

                </div>

                <h1 class="mx-4 mt-5">
                  <b>Websites e lojas online</b>
                </h1>

                <div class=" mt-5 container-fluid">
                  <div class="row">
                    <div class="col-sm-12">
                      <div id="inam" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="container">
                              <div class="row ">

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-laranja text-white" >
                                    <h1 class="text-center ">Normal</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-laranja text-white" >
                                    <h1 class="text-center ">Premium</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-laranja text-white" >
                                    <h1 class="text-center ">Lite</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                              </div>
                            </div>

                          </div>
                          <div class="carousel-item">
                            <div class="container">
                              <div class="row">
                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-laranja text-white" >
                                    <h1 class="text-center ">Boost</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-laranja text-white" >
                                    <h1 class="text-center ">Boost2</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-laranja text-white" >
                                    <h1 class="text-center ">Boost3</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                        </div>
                        <a href="#inam" class="carousel-control-prev" data-slide="prev">
                          <span class="carousel-control-prev-icon icon-color-laranja"></span>
                        </a>
                        <a href="#inam" class="carousel-control-next" data-slide="next">
                          <span class="carousel-control-next-icon black icon-color-laranja"></span>
                        </a>

                      </div>

                    </div>

                  </div>

                </div>

                <h1 class="mx-4 mt-5">
                  <b>Comunicação e consultoria</b>
                </h1>

                <div class=" mt-5 container-fluid">
                  <div class="row">
                    <div class="col-sm-12">
                      <div id="inam" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="container">
                              <div class="row ">

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-roxo text-white" >
                                    <h1 class="text-center ">Normal</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-roxo text-white" >
                                    <h1 class="text-center ">Premium</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-roxo text-white" >
                                    <h1 class="text-center ">Lite</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                              </div>
                            </div>

                          </div>
                          <div class="carousel-item">
                            <div class="container">
                              <div class="row">
                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-roxo text-white" >
                                    <h1 class="text-center ">Boost</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-roxo text-white" >
                                    <h1 class="text-center ">Boost2</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                                <div class="col-sm-12 col-lg-4 ">
                                  <div class="card card-body bg-roxo text-white" >
                                    <h1 class="text-center ">Boost3</h1>
                                    <div class="card-body text-white">
                                      <div class=" bg-light text-black">
                                        <div class="py-3">
                                          <h3 class="mx-3 mt-3">2 Publicações</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Facebook / Instagram</h3>
                                          <hr class="rounded"></hr>
                                          <h3 class="mx-3 mt-3">Semanal</h3>
                                        </div>
                                      </div>
                                    </div>
                                    <input class="bigcheckbox form-check-input " type="checkbox" ></input>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                        </div>
                        <a href="#inam" class="carousel-control-prev" data-slide="prev">
                          <span class="carousel-control-prev-icon icon-color-roxo"></span>
                        </a>
                        <a href="#inam" class="carousel-control-next" data-slide="next">
                          <span class="carousel-control-next-icon black icon-color-roxo"></span>
                        </a>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>


          <div class="py-5 text-center">
            <Link to="/packsEscolhidos">
              <button type="button" class="btn btn-primary text-center btnSubmeter">Submeter</button>
            </Link>
          </div>

          <div class="text-center">
            <Link to="/packsPersonalizados">
              <button type="button" class="btn btn-primary text-center btnSubmeter1">Pretende pack personalizado?</button>
            </Link>
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
        </div>
      </div>
    );
  }
}

export default index;
