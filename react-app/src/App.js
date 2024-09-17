import { Route, Routes } from "react-router-dom"
//components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";
//style
import "./css/app.css"
import { Container } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <Container className="p-3">
      
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
         <Route path="/listado" element={<Listado />}/>
         <Route path="/detalle" element={<Detalle/>}/>
         <Route path="/resultados" element={<Resultados/>}/>
      </Routes>
      <ToastContainer />
    </div>
    </Container>
  );
}

export default App;
