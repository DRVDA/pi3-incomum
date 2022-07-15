import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
//sweetalert2 - importação
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../css/style.css";

import Navbar from "../component/Navbar";

/*Images*/
import logotipoincommun from "../images/logotipoincommun.png";
import boxes from "../images/boxes.png";

export default function packsPrefeitos() {
  return (
    <div className="wrapper ">
      <Navbar />

      <div className="bg-amarelo py-5">
        <div className="container-fluid">
          <div className="col-sm-12 col-lg-4 ">
            <div className="card card-body bg-amarelo1 text-white">
              <div
                className="py-3 bg-light text-amarelo1"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <h1 className="text-center ">Teste2</h1>
              </div>
              <input
                className="bigcheckbox form-check-input"
                type="checkbox"
              ></input>
            </div>
          </div>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="col-4"
          >
            <div className="card card-body bg-amarelo1 text-white">
              <div
                className="py-3 bg-light text-amarelo1"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <h1 className="text-center ">Teste2</h1>
              </div>
              <input
                className="bigcheckbox form-check-input"
                type="checkbox"
              ></input>
            </div>
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">teste</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
