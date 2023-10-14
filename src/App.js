import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Banner from './Components/Banner';
import Head from './Components/Head';
import Menu from './Components/Menu';
import './assets/style.css';


function App() {
  return (
    <>
      <Head></Head>
      <Header></Header>
      <Banner></Banner>
      <Menu></Menu>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
