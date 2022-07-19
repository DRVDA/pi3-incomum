import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Menu from './view/menu';
import PacksPrefeitos from './view/packsPrefeitos';

import VerInfoPackAmarelo from './view/verInfoPackAmarelo';
import VerInfoPackAzul from './view/verInfoPackAzul';
import VerInfoPackLaranja from './view/verInfoPackLaranja';
import VerInfoPackRoxo from './view/verInfoPackRoxo';

import PacksEscolhidos from './view/PacksEscolhidos';
import PacksPersonalizados from './view/PacksPersonalizados';

import Teste from './view/teste';

import Form from './view/form';
import List from './view/list';
import Edit from './view/edit';

function App() {
  return (
    <Router>
      <div className="App">
        
          <div className="row">
            <Routes>
              <Route path="/" element={<Menu/>} />
              <Route path="/packsprefeitos" element={<PacksPrefeitos />} />

              <Route path="/verInfoPackAmarelo/:idpack" element={<VerInfoPackAmarelo />} />
              <Route path="/verinfopackAzul/:idpack" element={<VerInfoPackAzul />} />
              <Route path="/verinfopackLaranja/:idpack" element={<VerInfoPackLaranja />} />
              <Route path="/verinfopackRoxo/:idpack" element={<VerInfoPackRoxo />} />

              <Route path="/packsescolhidos" element={<PacksEscolhidos />} />
              <Route path="/packspersonalizados" element={<PacksPersonalizados />} />

              <Route path="/teste" element={<Teste />} />
             
            </Routes>
          </div>
      </div>
    </Router>
  );
}
export default App;