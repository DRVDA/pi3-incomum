import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Menu from './view/menu';
import PacksPredefenidos from './view/packsPrefeitos';
import PacksEscolhidos from './view/packsEscolhidos';
import PacksPersonalizados from './view/packsPersonalizados';


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
              <Route path="/packsprefeitos" element={<PacksPredefenidos />} />
              <Route path="/packsescolhidos" element={<PacksEscolhidos />} />
              <Route path="/packspersonalizados" element={<PacksPersonalizados />} />

              <Route path="/list" element={<List />} />
              <Route path="/form" element={<Form />} />
              <Route path="/edit/:filmeid" element={<Edit />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}
export default App;