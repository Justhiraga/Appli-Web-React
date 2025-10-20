import Header from '../components/molecules/header.jsx';
import Footer from '../components/molecules/footer';
import Core404 from '../components/atoms/404.jsx';
import ErrorLink from '../components/atoms/404link.jsx';

export default function Error404() {
  return (
    <>
      <Header />
      <Core404 />
      <ErrorLink />
      <Footer />
    </>
  )
}