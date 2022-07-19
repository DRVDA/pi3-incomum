import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
import { data } from 'jquery';

export default function verInfoPack() {
  const { idpack } = useParams();
  const [campIdTipoPack, setcampIdTipoPack] = useState("");
  const [campNome, setcampNome] = useState("");
  const [campPreco, setcampPreco] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = "https://backend-incomum.herokuapp.com/packsfrontoffice/get/" + idpack;
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setcampIdTipoPack(data.idtipo);
          setcampNome(data.nome);
          setcampPreco(data.preco);
        console.log(idpack);
          
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server: " + error);
      })
      .finally(() => setIsLoading(false));
  }, []);
    
    if(isLoading) {
        return(
            <div>
                Loading...
            </div>
        );
    }
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
                <div className="col-12 col-4 " >
                    <div className="card card-body bg-azul text-white" >
                        <div className="py-3 bg-light " >

                        <h1 className="mx-4 display-4 text-center text-azul">
                            {campNome}
                        </h1>
                        <div className="d-flex justify-content-center ">
                          <div className="col-10 border bg-azul h-25"/>
</div>
<h6 className="mx-4 text-center text-dark">
                  <br/>
                    <h5>3 publicacões de instagram 3 vezes por semana </h5>
                    <h5>2 reals de stories no youtube</h5>
                    <h5>1 post Facebook</h5>
                    <h5>1 redesign de páginas</h5>
                </h6>
                        </div>
                    </div>
                    </div>
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

}
