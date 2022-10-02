import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Courses } from './components/Courses';
import { Contact } from './components/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";





function App() {
  return (
    <div className="App">


      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />




        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
