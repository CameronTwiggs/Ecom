import ProuductCarousel from '../components/ProductCarousel.jsx';



export default function Home() {
    return (
        <>
  <section className="hero main__section">
    <h1 className="hero__title terminal"> /null/... </h1>
    <p className="hero__text">
      / We become aware of the void(0) as we fill it. /
    </p>
  </section>
  <div className="divider div-transparent div-arrow-down" />
  <section className="intro main__section">
    <div className="intro__wrapper">
      <h2 className="intro__title">What we do?</h2>
      <p className="intro__text">
        Nothing... well nothing particularly crazy. We wish to promote the
        developer lifestyle. The people here at /Null/ love a blank canvas, the
        potentiality of creation, and the limitless potential that can come from
        every idea. Developers solve problems, yes, but we can be expressive and
        creative as well. 🎨
      </p>
    </div>
    <img src="./images/misc/computer.jpg" alt="logo" />
  </section>
  <div className="divider div-transparent div-arrow-down" />
  <section className="shop main__section">
    <img src="./images/products/stickers.png" alt="Stickers" />
    <div className="shop__wrapper">
      <h2 className="shop__title">Our products...</h2>
      <p className="shop__text">
        Nothing... too crazy we sell stickers for developers
      </p>
      <a href="/products" className="btn btn--purple">
        Products
      </a>
    </div>
  </section>
  <section className="testimonials__section main__section">
    <ProuductCarousel /> 
  </section>
  <div className="divider div-transparent div-arrow-down" />
  <section className="contact main__section">
    <h2 className="contact__title terminal terminal--blue ">
      ~$ Contact Us...{" "}
    </h2>
    <p className="contact__text">
      Questions, Comments, Feedback? Maybe even a buisness inquirery? Feel free
      to reach out.
    </p>
    <a className="btn btn--blue" href="/contact">
      Call the Void
    </a>
  </section>
  
  
</>
)}