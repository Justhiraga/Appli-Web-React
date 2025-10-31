import Header from "../components/molecules/header.jsx";
import Footer from "../components/molecules/footer.jsx";
import Carrousel from "../components/molecules/Carrousel.jsx";
import mydata from '../../logements.json';
import Subtitles from "../components/atoms/subtitles.jsx";
import Location from "../components/atoms/location.jsx";
import Tags from "../components/molecules/tags.jsx";
import './logement.css'
import { useParams } from 'react-router';
import Error404 from "./error_404.jsx";
import Rating from "../components/molecules/rating.jsx";
import Circle from "../components/atoms/circle.jsx";
import Collapse from "../components/molecules/collapse.jsx";

export default function Logement() {
    let { ID } = useParams();
    const logement = mydata.find((product) => product.id === ID);
    if (!logement){
    return (
      <Error404  />
    )
  } 
 
  return (
    <>
      <Header />
      <Carrousel pictures={logement.pictures} />
      <div className="sub-t">
        <Subtitles title={logement.title}/>
      </div>
      <Location location={logement.location} />
      <Tags tags={logement.tags} />
      <Rating rating={logement.rating} />
      <div className="Host">
        <p className="Host-name">{logement.host.name}</p>
        <Circle img={logement.host.picture} />
      </div>
      <div className="collapse">
        <Collapse collapsetitle="Description" texte={logement.description} />
        <Collapse collapsetitle="Equipements" equipments={logement.equipments} />
      </div>
      <Footer />
    </>
  );
}