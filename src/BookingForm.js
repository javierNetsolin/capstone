import { useState } from 'react';

export default function BookingForm({availableTimes =[], setAvailableTimes, submitForm}){
  // const availableTimes=[
  //   '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  // ]
  // console.log(setAvailableTimes)
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(availableTimes.length > 0 ? availableTimes[0] : "");
  const [time, setTime] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e)=>{
    if(setAvailableTimes){
      setAvailableTimes({type:'UPDATE_TIMES', payload: e.target.value})
    }
    setDate(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('submit form', date, guests, time, occasion)
    if(Number(guests)<1 || Number(guests) > 10){
      alert('Number of guests must be between 1 and 10.')
      return;
    }
    submitForm({
      date, guests, time, occasion
    })
    //reset the form
    setDate('');
    setGuests('1');
    setOccasion('Birthday');
    setTime(availableTimes.length > 0 ? availableTimes[0] : "");
  }

     return (
    <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Reserve a Table</h2>
      <label htmlFor="res-date">Choose date</label>
      <input value={date}
      onChange={handleDateChange}
      type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select value={time}
      onChange={(e) => setTime(e.target.value)} className="custom-select" id="res-time">
        {availableTimes.map((item, index) =>(
          <option key={index}>{item}</option>
        ))}
        {/* <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option> */}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input value={guests}
      onChange={(e) => setGuests(e.target.value) }
      type="number" placeholder="1" min="1" max="10" id="guests" />

      <label htmlFor="occasion">Occasion</label>
      <select value={occasion}
      onChange={(e) => setOccasion(e.target.value)} className="custom-select" id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* <input disabled={!date && !guests && !time && !occasion} type="submit" value="Make Your reservation" /> */}
      <button disabled={!date || !guests} type="submit">
        Make Your reservation
      </button>
      {/* <button disabled={!dte && guessts...} type="submit" value="Make Your reservation" /> */}
    </form>
  );
}