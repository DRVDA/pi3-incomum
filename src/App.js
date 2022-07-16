import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Menu from './view/menu';
import PacksPrefeitos from './view/packsPrefeitos';
import VerInfoPack from './view/verInfoPack';
import PacksEscolhidos from './view/packsEscolhidos';
import PacksPersonalizados from './view/packsPersonalizados';

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
              <Route path="/verInfoPack/:idpack" element={<VerInfoPack />} />
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