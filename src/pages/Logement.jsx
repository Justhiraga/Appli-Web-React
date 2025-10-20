import Header from "../components/molecules/header.jsx";
import Footer from "../components/molecules/footer.jsx";
import Carrousel from "../components/molecules/Carrousel.jsx";
import mydata from '../../logements.json';
import { useLocation } from 'react-router';

export default function Logement() {
    let location = useLocation();
    location = location.pathname;
    const ID = location.slice(1);
    const cardimg = mydata.filter((product) => product.id === ID);
    console.log(cardimg);
  return (
    <>
      <Header />
      <Carrousel />
      <Footer />
    </>
  );
}