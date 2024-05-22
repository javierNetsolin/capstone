import ResturantFood from "./assets/restauranfood.jpg"
export default function Main(){
    return(<main className="main-content">
        <Hero />
        <Highlights/>
    </main>)
}


export function Hero(){
    return( <section class="hero-section">
        <div class="hero">
          <div class="left">
            <div>

              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
            </div>
            <p>We are a family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist.</p>
            <div class="reserve-button">
              <p>Reserve a table</p>
            </div>

          </div>
          <div class="right">
            <div class="image-container">
              <img  src={ResturantFood} alt="restaurant food"/>
            </div>
          </div>
        </div>
      </section>)
}

export function Highlights(){
    return( <section class="highlights">
        <div class="highlights-heading">

          <h2>This week specials!</h2>
          <div class="menu-button">
            <p>Online Menu</p>
          </div>
        </div>
        <div class="cards-h">
          <div class="specials-card">
           <div class="image-card-container">
            <img  src="assets/greek salad.jpg" alt="greek salad"/>
          </div>
          <div class="content-container-card">
            <div class="tittle-container-card">
              <h4>Greek sald</h4>
              <p>$12.99</p>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <h5>Order  delivery <span class="icon"><img src="assets/moto.svg" alt="Shopping Cart Icon"/></span></h5>
          </div>
        </div>
          <div class="specials-card">
           <div class="image-card-container">
            <img  src="assets/bruchetta.svg" alt="greek salad"/>
          </div>
          <div class="content-container-card">
            <div class="tittle-container-card">
              <h4>Bruchetta</h4>
              <p>$5.99</p>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <h5>Order  delivery <span class="icon"><img src="assets/moto.svg" alt="Shopping Cart Icon"/></span></h5>
          </div>
        </div>
          <div class="specials-card">
           <div class="image-card-container">
            <img  src="assets/lemon dessert.jpg" alt="greek salad"/>
          </div>
          <div class="content-container-card">
            <div class="tittle-container-card">
              <h4>Lemon Dessert</h4>
              <p>$5.00</p>
            </div>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
            <h5>Order  delivery <span class="icon"><img src="assets/moto.svg" alt="Shopping Cart Icon"/></span></h5>
          </div>
        </div>
        </div>
      </section>)
}