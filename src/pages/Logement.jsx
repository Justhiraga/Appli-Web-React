import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import Carrousel from "../components/molecules/Carrousel";
import mydata from '../../logements.json';
import Subtitles from "../components/atoms/Subtitles";
import Location from "../components/atoms/Location";
import Tags from "../components/molecules/Tags";
import './Logement.css'
import { useParams } from 'react-router';
import Error404 from "./Error_404";
import Rating from "../components/molecules/Rating";
import Circle from "../components/atoms/Circle";
import Collapse from "../components/molecules/Collapse";

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
      <div className="main-container">
        <Carrousel pictures={logement.pictures} />
        <div className="info">
          <div className="sub-info">
            <div className="sub-t">
              <Subtitles title={logement.title}/>
            </div>
            <Location location={logement.location} />
            <Tags tags={logement.tags} />
            </div>
          <div className="ratehost">
            <Rating rating={logement.rating} />
            <div className="Host">
              <p className="Host-name">{logement.host.name}</p>
              <Circle img={logement.host.picture} />
            </div>
          </div>
        </div>
        <div className="collapse">
          <Collapse collapsetitle="Description" texte={logement.description} />
          <Collapse collapsetitle="Equipements" equipments={logement.equipments} />
        </div>
      </div>
      <Footer />
    </>
  );
}
