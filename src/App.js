import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import Header from "./components/Header";
import SocialButton from "./components/SocialButton";
import Footer from "./components/Footer";

function App() {
  return (
    <>
 <BrowserRouter>
 <Header />
 <SocialButton />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
   );
  }

export default App;
