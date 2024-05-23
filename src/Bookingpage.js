import ResturantFood from "./assets/restauranfood.jpg"
export default function Bookingpage(){
    return(<main className="main-content">
        {/* <h1>hola reservas</h1> */}
             <div class="image-container-booking">
                 <img  src={ResturantFood} alt="Resturant food"/>
             </div>

        <Bookingform />
    </main>)
}

export function Bookingform(){
     return (
    <form className="booking-form" >
        <h2>Reserve a Table</h2>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select className="custom-select" id="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      
      <label htmlFor="occasion">Occasion</label>
      <select className="custom-select" id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}