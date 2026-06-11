import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home.jsx'
import Logement from './pages/Logement.jsx'
import Error404 from './pages/Error_404.jsx'
import About from './pages/About.jsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/logement/:ID" element={<Logement />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>,
);


