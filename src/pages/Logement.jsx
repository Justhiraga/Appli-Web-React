import Header from "../components/molecules/header.jsx";
import Footer from "../components/molecules/footer.jsx";
import Carrousel from "../components/molecules/Carrousel.jsx";
import mydata from '../../logements.json';
import { useParams } from 'react-router';

export default function Logement() {
    let { ID } = useParams();
    const cardimg = mydata.filter((product) => product.id === ID);
  return (
    <>
      <Header />
      <Carrousel pictures={cardimg[0].pictures} />
      <Footer />
    </>
  );
}