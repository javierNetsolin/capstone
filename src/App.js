import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage";
import Nav from "./Nav";
import Bookingpage from "./Bookingpage";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (<div className="wrapper">
  <Header />
  <Nav />
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/reservations" element={<Bookingpage />} />
  </Routes>
  </BrowserRouter>
  <Footer />
  </div>
  );
}

export default App;
