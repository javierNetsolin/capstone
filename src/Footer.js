import VerticalLogo from "./assets/VerticalLogo";
export default function Footer(){
    return( <footer className="main-footer">
        <section className="footer-section">

          {/* <div className="image-container"> */}
           {/* <img src={VerticalLogo} alt="Little Lemon Logo"/> */}
          {/* </div> */}
            <VerticalLogo className="logo-container" ></VerticalLogo>

          <figure>
              <figcaption>Doormat Navigation</figcaption>
              <ul>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/menu">Menu</a></li>
                  <li><a href="/reservations">Reservations</a></li>
                  <li><a href="/order-online">Order Online</a></li>
                  <li><a href="/login">Login</a></li>
              </ul>
          </figure>
          <figure>
              <figcaption>Contact</figcaption>
              <ul>
                  <li>Adress</li>
                  <li>Phone number</li>
                  <li>Email</li>
              </ul>
          </figure>
          <figure>
              <figcaption>Social Media Links</figcaption>
              <ul>
                  <li><a href="https://www.facebook.com/">Facebook</a></li>
                  <li><a href="https://www.instagram.com">Instagram</a></li>
                  <li><a href="https://twitter.com/">Twitter</a></li>
              </ul>
          </figure>
        </section>
  </footer>
    )
}