import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage";
import Nav from "./Nav";
import Bookingpage from "./Bookingpage";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";

function App() {
  return (<div className="wrapper">
  <BrowserRouter>
  <Header />
  <Nav />
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/reservations" element={<Bookingpage />} />
    <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  </div>
  );
}

export default App;
