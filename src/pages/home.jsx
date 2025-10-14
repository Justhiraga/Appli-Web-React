import Header from "../components/molecules/header.jsx";
import MainCard from "../components/molecules/main-card.jsx";
import Cards from "../components/organismes/cards.jsx";
import './home.css'

export default function Home() {
  return (
    <>
      <Header />
      <MainCard />
      <Cards />
    </>
  );
}