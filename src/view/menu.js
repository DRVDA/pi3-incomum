import axios from "axios";
import React, { useEffect, useState } from "react";
//sweetalert2 - importação
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/style.css";
export default function Menu() {
  return (
    <div className="container-fluid bg-amarelo text-white">
      <nav class="navbar mb-5">
        <div class="container-fluid">
          <img
            src={require("../images/logotipoincommun.png")}
            className="img-fluid w-25"
          />
          <div class="p-2 bd-highlight text-white">
            <h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              Menu
            </h4>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-4">
            <div className="row col-12">
              <h6 className="col-1">01.</h6>
              <h3 className="col-5">Sobre nós</h3>
            </div>
            <div className="row col-12">
              <h6 className="col-1">02.</h6>
              <h3 className="col-5">
                Serviços
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </h3>
            </div>
            <div className="row col-12">
              <h6 className="col-1">03.</h6>
              <h3 className="col-5">Packs</h3>
            </div>
            <div className="row col-12">
              <h6 className="col-1"></h6>
              <h5 className="col-5 ms-4 decoration-none ">
                <Link
                  to="/packsprefeitos"
                  className="text-white decoration-none"
                >
                  Prefeitos
                </Link>
              </h5>
            </div>
            <div className="row col-12">
              <h6 className="col-1"></h6>
              <h5 className="col-5 ms-4 decoration-none ">
                <Link
                  to="/packspersonalizados"
                  className="text-white decoration-none"
                >
                  Personalizados
                </Link>
              </h5>
            </div>

            <div className="row col-12">
              <h6 className="col-1">04.</h6>
              <h3 className="col-5">
                Portfólio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </h3>
            </div>
            <div className="row col-12">
              <h6 className="col-1">05.</h6>
              <h3 className="col-5">Blog</h3>
            </div>
            <div className="row col-12">
              <h6 className="col-1">06.</h6>
              <h3 className="col-5">Contactos</h3>
            </div>
          </div>
          <div class="col-md-3"></div>

          <div class="col col-lg-2">
            <h5>
              <b>Telefone</b>:
            </h5>
            <h6>+351 914 617 217</h6>
            <h5>
              <b>Endereço</b>:
            </h5>
            <h6>
              incommun creative lab Rua da Ramalhosa 3510-775 Repeses, Viseu
            </h6>
            <h5>
              <b>Email</b>:
            </h5>
            <h6>geral@incommun.pt</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
