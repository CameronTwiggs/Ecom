export default function Navbar() {
    return (
    <header>
        <img className="header__logo" src="./images/misc/NullLogo.png" alt="Logo" />
        <nav className="header__nav">
          <ul className="nav__list">
            <li>
              <button onClick={() => window.location.pathname = "/contact"}>Contact</button>
            </li>
            <li>
              <button  onClick={() => window.location.pathname = "/"}>Home</button>
            </li>
            <li>
              <button  onClick={() => window.location.pathname = "/products"}>Products</button>
            </li>
            <li>
              <button  onClick={() => window.location.pathname = "/Testimonial"}>Testimonial</button>
            </li>
          </ul>
        </nav>
        <button href="" className="header__cta">
          Cart
        </button>
    </header>
    )
}