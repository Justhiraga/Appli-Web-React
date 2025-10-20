import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home.jsx'
import Logement from './pages/Logement.jsx'
import Error404 from './pages/error_404.jsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path=":logement" element={<Logement />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>,
);


