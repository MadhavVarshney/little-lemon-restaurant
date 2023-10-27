import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Booking from './Components/pages/Bookings/Booking';
import Home from './Components/pages/Home';
import Layout from './Components/layouts/Layout';
import pages from './utils/pages';
import UnderConstruction from './Components/pages/UnderConstruction';
import ConfirmedBooking from './Components/pages/Bookings/ConfirmedBooking';
import NotFound from './Components/pages/NotFound';
import './assets/style.css';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />}></Route>
          <Route path={pages.get('about').path} element={<UnderConstruction />} />
          <Route path={pages.get('bookings').path} element={<Booking />} />
          <Route path={pages.get('menu').path} element={<UnderConstruction />} />
          <Route path={pages.get('confirmedBooking').path} element={<ConfirmedBooking />} />
          <Route path={pages.get('orderOnline').path} element={<UnderConstruction />} />
          <Route path={pages.get('login').path} element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
