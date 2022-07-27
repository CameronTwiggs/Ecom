import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Dino from "./pages/Dino.jsx";
import "./styles/styles.css";

function App() {
  let component; 
  if (window.location.pathname === "/") {
    component = <Home />;
  }
  else if (window.location.pathname === "/contact") {
    component = <Contact />;
  }
  else if (window.location.pathname === "/products") {
   component = <Products />;
  }
  else if (window.location.pathname === "/dino") {
    component = <Dino />;
  }
  else if (window.location.pathname === "/dino") {
    component = <Testimonial />;
  }


  return (
    <>
      <Navbar />
      {component}
      <Footer />
    </>
  );
}

export default App;
