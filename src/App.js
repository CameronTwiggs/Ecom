import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/styles.css";

function App() {
  let component; 
  if (window.location.pathname === "/") {
    component =  <Home />;
  }
  else if (window.location.pathname === "/contact") {
    component = <Contact />;
  }
  else if (window.location.pathname === "/products") {
   component = <Products />;
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
