import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loginform from './Loginform';
import "./styles.css";
import Registerform from './Registerform';
import { BrowserRouter, Route, Routes } from "react-router-dom";


// function App(){
//   return(
//     <div className="App">
//       <Loginform />
//     </div>
//   );
// }
const rootElement= document.getElementById("root");
ReactDOM.render(
<BrowserRouter>
<Routes>
<Route exact path="/" element={<Loginform />}/>
<Route path="/Registerform" element={<Registerform />}/>
</Routes>
  </BrowserRouter>, rootElement);

