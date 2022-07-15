import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
//sweetalert2 - importação
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import '../css/style.css';

import Navbar from "../component/Navbar";


/*Images*/
import logotipoincommun from "../images/logotipoincommun.png";
import boxes from "../images/boxes.png";

export default function packsPrefeitos() {
  const [packList1, setdataPack1] = useState([]);
  const [packList2, setdataPack2] = useState([]);
  const [packList3, setdataPack3] = useState([]);
  const [packList4, setdataPack4] = useState([]);

  useEffect(() => {
    const url = "https://backend-incomum.herokuapp.com/packsfrontoffice/listMarktingDigital";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data1 = res.data.data;
          setdataPack1(data1);
          

          const url = "https://backend-incomum.herokuapp.com/packsfrontoffice/listDesignGrafico";
          axios
            .get(url)
            .then((res) => {
              if (res.data.success) {
                const data2 = res.data.data;
                setdataPack2(data2);


                const url = "https://backend-incomum.herokuapp.com/packsfrontoffice/listWebsitesELojasOnline";
                axios
                  .get(url)
                  .then((res) => {
                    if (res.data.success) {
                      const data3 = res.data.data;
                      setdataPack3(data3);


                      const url = "https://backend-incomum.herokuapp.com/packsfrontoffice/listComunicacaoEConsultoria";
                      axios
                        .get(url)
                        .then((res) => {
                          if (res.data.success) {
                            const data4 = res.data.data;
                            setdataPack4(data4);
                          } else {
                            alert("Error Web Service!");
                          }
                        })
                        .catch((error) => {
                          alert(error);
                        });



                    } else {
                      alert("Error Web Service!");
                    }
                  })
                  .catch((error) => {
                    alert(error);
                  });



              } else {
                alert("Error Web Service!");
              }
            })
            .catch((error) => {
              alert(error);
            });



        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="wrapper ">
      <Navbar/>


    <div className="bg-amarelo py-5" >
          <div className="container-fluid">
            <div className="row mt-5">

              <img src={boxes} className="boxes-image" alt="boxes" />

              <div className="col-6 col-sm-5 margem-cima">
                <h1 className="display-3 text-center text-light">
                  <b>Packs para todos</b>
                </h1>
                <h1 className="display-3 text-center text-light">
                  <b>Packs para todos</b>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-branco pt-5">
          <div className="container-fluid">
            <div className="row justify-content-between">

              <div >
                <h1 className="mx-4 display-4 text-center">
                  <b>Packs predefinidos</b>
                </h1>

                <h1 className="mx-4">
                  <b>Marketing Digital</b>
                </h1>

                <div className=" mt-5 container-fluid">
                  <div className="row">
                    <div className="col-sm-12">
                      <div id="inam" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="container">
                              <div className="row ">

                                <LoadFillDataMarktingDigital />

                              </div>
                            </div>
                          </div>
                        </div>
                        <a href="#inam" className="carousel-control-prev" data-slide="prev">
                          <span className="carousel-control-prev-icon icon-color-amarelo1"></span>
                        </a>
                        <a href="#inam" className="carousel-control-next" data-slide="next">
                          <span className="carousel-control-next-icon icon-color-amarelo1"></span>
                        </a>

                      </div>

                    </div>

                  </div>

                </div>

                <h1 className="mx-4 mt-5">
                  <b>Design Gráfico</b>
                </h1>

                <div className=" mt-5 container-fluid">
                  <div className="row">
                    <div className="col-sm-12">
                      <div id="inam" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="container">
                              <div className="row ">

                              <LoadFillDataDesignGrafico />

                              </div>
                            </div>
                          </div>
                        </div>
                        <a href="#inam" className="carousel-control-prev" data-slide="prev">
                          <span className="carousel-control-prev-icon icon-bg-azul"></span>
                        </a>
                        <a href="#inam" className="carousel-control-next" data-slide="next">
                          <span className="carousel-control-next-icon black icon-bg-azul"></span>
                        </a>

                      </div>

                    </div>

                  </div>

                </div>

                <h1 className="mx-4 mt-5">
                  <b>Websites e lojas online</b>
                </h1>

                <div className=" mt-5 container-fluid">
                  <div className="row">
                    <div className="col-sm-12">
                      <div id="inam" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="container">
                              <div className="row ">

                              <LoadFillDataWebsitesELojas />


                              </div>
                            </div>
                          </div>
                        </div>
                        <a href="#inam" className="carousel-control-prev" data-slide="prev">
                          <span className="carousel-control-prev-icon icon-color-laranja"></span>
                        </a>
                        <a href="#inam" className="carousel-control-next" data-slide="next">
                          <span className="carousel-control-next-icon black icon-color-laranja"></span>
                        </a>

                      </div>

                    </div>

                  </div>

                </div>

                <h1 className="mx-4 mt-5">
                  <b>Comunicação e consultoria</b>
                </h1>

                <div className=" mt-5 container-fluid">
                  <div className="row">
                    <div className="col-sm-12">
                      <div id="inam" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="container">
                              <div className="row ">

                                <LoadFillDataComunicacaoECconsultoria/>

                              </div>
                            </div>
                          </div>
                        </div>
                        <a href="#inam" className="carousel-control-prev" data-slide="prev">
                          <span className="carousel-control-prev-icon icon-color-roxo"></span>
                        </a>
                        <a href="#inam" className="carousel-control-next" data-slide="next">
                          <span className="carousel-control-next-icon black icon-color-roxo"></span>
                        </a>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>


          <div className="py-5 text-center">
            <Link to="/packsEscolhidos">
              <button type="button" className="btn btn-primary text-center btnSubmeter">Submeter</button>
            </Link>
          </div>

          <div className="text-center">
            <Link to="/packsPersonalizados">
              <button type="button" className="btn btn-primary text-center btnSubmeter1">Pretende pack personalizado?</button>
            </Link>
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
        </div>
    </div>
  );

  function LoadFillDataMarktingDigital() {
    
    return packList1.map((data, index) => {
      return (
        
        <div className="col-sm-12 col-lg-4 " >
          <div className="card card-body bg-amarelo1 text-white" >
            <Link className="py-3 bg-light text-amarelo1" to={"/verInfoPack/" + data.idpack}>
              <h1 className="text-center ">{data.nome}</h1>
            </Link>
            <input className="bigcheckbox form-check-input" type="checkbox" ></input>
          </div>
        </div>
      );
    });
  }

  function LoadFillDataDesignGrafico() {
    return packList2
    .map((data, index) => {
      return (
        

        <div className="col-sm-12 col-lg-4 ">
          <div className="card card-body bg-azul text-white" >
            <h1 className="text-center ">{data.nome}</h1>
            <div className="card-body text-white">
              <div className=" bg-light text-black">
                <div className="py-3">
                  <h3 className="mx-3 mt-3">2 Publicações</h3>
                  <hr className="rounded"></hr>
                  <h3 className="mx-3 mt-3">Facebook / Instagram</h3>
                  <hr className="rounded"></hr>
                  <h3 className="mx-3 mt-3">Semanal</h3>
                </div>
              </div>
            </div>
            <input className="bigcheckbox form-check-input" type="checkbox" ></input>
          </div>
        </div>


      );
    });
  }

  function LoadFillDataWebsitesELojas() {
    return packList3.map((data, index) => {
      return (
        

        <div className="col-sm-12 col-lg-4 ">
          <div className="card card-body bg-laranja text-white" >
            <h1 className="text-center ">{data.nome}</h1>
            <div className="card-body text-white">
              <div className=" bg-light text-black">
                <div className="py-3">
                  <h3 className="mx-3 mt-3">2 Publicações</h3>
                  <hr className="rounded"></hr>
                  <h3 className="mx-3 mt-3">Facebook / Instagram</h3>
                  <hr className="rounded"></hr>
                  <h3 className="mx-3 mt-3">Semanal</h3>
                </div>
              </div>
            </div>
            <input className="bigcheckbox form-check-input" type="checkbox" ></input>
          </div>
        </div>


      );
    });
  }

  function LoadFillDataComunicacaoECconsultoria() {
    return packList4.map((data, index) => {
      return (
        

        <div className="col-sm-12 col-lg-4 ">
          <div className="card card-body bg-roxo text-white" >
            <h1 className="text-center ">{data.nome}</h1>
            <div className="card-body text-white">
              <div className=" bg-light text-black">
                <div className="py-3">
                  <h3 className="mx-3 mt-3">2 Publicações</h3>
                  <hr className="rounded"></hr>
                  <h3 className="mx-3 mt-3">Facebook / Instagram</h3>
                  <hr className="rounded"></hr>
                  <h3 className="mx-3 mt-3">Semanal</h3>
                </div>
              </div>
            </div>
            <input className="bigcheckbox form-check-input" type="checkbox" ></input>
          </div>
        </div>


      );
    });
  }
}
