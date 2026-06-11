import Header from "../components/molecules/Header.jsx";
import MainCard from "../components/molecules/MainCard.jsx";
import Cards from "../components/organismes/Cards.jsx";
import Footer from "../components/molecules/Footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <MainCard />
      <Cards />
      <Footer />
    </>
  );
}