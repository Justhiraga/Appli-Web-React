import Header from "../components/molecules/header.jsx";
import Footer from "../components/molecules/footer.jsx";
import Carrousel from "../components/molecules/Carrousel.jsx";
import mydata from '../../logements.json';
import Subtitles from "../components/atoms/subtitles.jsx";
import Location from "../components/atoms/location.jsx";
import Tag from "../components/atoms/tag.jsx";
import './logement.css'
import { useParams } from 'react-router';

export default function Logement() {
    let { ID } = useParams();
    const cardimg = mydata.filter((product) => product.id === ID);
  return (
    <>
      <Header />
      <Carrousel pictures={cardimg[0].pictures} />
      <div className="subtitle">
        <Subtitles title={cardimg[0].title}/>
      </div>
      <div className="location">
        <Location location={cardimg[0].location} />
      </div>
      <ul>
        <Tag tags={cardimg[0].tags} />
      </ul>
      <Footer />
    </>
  );
}