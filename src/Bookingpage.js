import ResturantFood from "./assets/restauranfood.jpg"
import React, { useState } from 'react';

export default function Bookingpage(){
    return(<main className="main-content">
        {/* <h1>hola reservas</h1> */}
             <div className="image-container-booking">
                 <img  src={ResturantFood} alt="Resturant food"/>
             </div>

        <Bookingform />
    </main>)
}

export function Bookingform(){
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOcassion] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('submit form', date, guests, time, occasion)
    //reset the form
    // setDate('');
    // setGuests('');
    // setOcassion('');
    // setTime('');
  }

     return (
    <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Reserve a Table</h2>
      <label htmlFor="res-date">Choose date</label>
      <input value={date}
      onChange={(e) => setDate(e.target.value)}
      type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select value={time}
      onChange={(e) => setTime(e.target.value)} className="custom-select" id="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input value={guests}
      onChange={(e) => setGuests(e.target.value) }
      type="number" placeholder="1" min="1" max="10" id="guests" />

      <label htmlFor="occasion">Occasion</label>
      <select value={occasion}
      onChange={(e) => setOcassion(e.target.value)} className="custom-select" id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
      {/* <button disabled={!dte && guessts...} type="submit" value="Make Your reservation" /> */}
    </form>
  );
}