import Header from "../components/molecules/header.jsx";
import MainCard2 from "../components/molecules/main-card2.jsx";
import Footer from "../components/molecules/footer.jsx";
import Collapse from "../components/molecules/collapse.jsx";
import about from '../../about.json'


export default function About() {
    return (
        <>
            <Header />
            <MainCard2 />
            <div className="collapse">
                <Collapse collapsetitle="Fiabilité" texte={about.fiabilite} />
                <Collapse collapsetitle="Respect" texte={about.respect} />
                <Collapse collapsetitle="Service" texte={about.service} />
                <Collapse collapsetitle="Sécurité" texte={about.securite} />
            </div>
            <Footer />
        </>
    );
}