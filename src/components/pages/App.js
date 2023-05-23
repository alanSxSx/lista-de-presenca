import {BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Cadastro from './Cadastro';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Cadastro />} />
      </Routes>
    </Router>   
  )
}

export default App;
