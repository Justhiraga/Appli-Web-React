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
      <div className="subtitle">
        <Subtitles title={logement.title}/>
      </div>
      <div className="location">
        <Location location={logement.location} />
      </div>
        <Tags tags={logement.tags} />
      <Footer />
    </>
  );
}