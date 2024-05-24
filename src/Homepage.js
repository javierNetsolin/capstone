import ResturantFood from "./assets/restauranfood.jpg"
import GreekSalad from "./assets/greeksalad.jpg"
import LemonDessert from "./assets/lemondessert.jpg"
import Bruchetta from "./assets/bruchetta.jpg"
import Moto from "./assets/moto.svg"
import MarioAdrian from "./assets/marioandAdrian.jpg"
export default function Homepage(){
    return(<main className="main-content">
        <Hero />
        <Highlights/>
        <About />
    </main>)
}


export function Hero(){
    return( <section className="hero-section">
        <div className="hero">
          <div className="left">
            <div>

              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
            </div>
            <p>We are a family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist.</p>
            <div className="reserve-button">
              <p>Reserve a table</p>
            </div>

          </div>
          <div className="right">
            <div className="image-container">
              <img  src={ResturantFood} alt="restaurant food"/>
            </div>
          </div>
        </div>
      </section>)
}

export function Highlights(){
    return( <section className="highlights">
        <div className="highlights-heading">

          <h2>This week specials!</h2>
          <div className="menu-button">
            <p>Online Menu</p>
          </div>
        </div>
        <div className="cards-h">
          <Cards />

        </div>
      </section>)
}

export function About(){
    return( <section className="about">
        <div className="left">
          <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>

          </div>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
      <div className="right">

        <div className="image-container">
                 <img  src={MarioAdrian} alt="Mari and Adrian"/>
               </div>
      </div>
      </section>)
}

export function Cards(){
  const list = [
    {
      title: 'Greek sald',
      img: GreekSalad,
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      title: 'Bruchetta',
      img: Bruchetta,
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      title: 'Lemon Dessert',
      img: LemonDessert,
      price: '$5.00',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ];

  return(<>
      {list.map((item, index)=>(
    <div className="specials-card" key={index}>
        <div className="image-card-container">
          <img src={item.img} alt="greek salad" />
        </div><div className="content-container-card">
            <div className="tittle-container-card">
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
            <p>{item.description}</p>
            <h5>Order  delivery <span className="icon"><img src={Moto} alt="Shopping Cart Icon" /></span></h5>
          </div>
        </div>
      ))}
  </>
  )
}










//  <div className="specials-card">
//            <div className="image-card-container">
//             <img  src={GreekSalad} alt="greek salad"/>
//           </div>
//           <div className="content-container-card">
//             <div className="tittle-container-card">
//               <h4>Greek sald</h4>
//               <p>$12.99</p>
//             </div>
//             <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
//             <h5>Order  delivery <span className="icon"><img src={Moto} alt="Shopping Cart Icon"/></span></h5>
//           </div>
//         </div>
//           <div className="specials-card">
//            <div className="image-card-container">
//             <img  src={Bruchetta} alt="Bruchetta"/>
//           </div>
//           <div className="content-container-card">
//             <div className="tittle-container-card">
//               <h4>Bruchetta</h4>
//               <p>$5.99</p>
//             </div>
//             <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
//             <h5>Order  delivery <span className="icon"><img src={Moto} alt="Shopping Cart Icon"/></span></h5>
//           </div>
//         </div>
//           <div className="specials-card">
//            <div className="image-card-container">
//             <img  src={LemonDessert} alt="Lemon dessert"/>
//           </div>
//           <div className="content-container-card">
//             <div className="tittle-container-card">
//               <h4>Lemon Dessert</h4>
//               <p>$5.00</p>
//             </div>
//             <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
//             <h5>Order  delivery <span className="icon"><img src={Moto} alt="Shopping Cart Icon"/></span></h5>
//           </div>
//         </div>