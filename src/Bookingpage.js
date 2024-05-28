import ResturantFood from "./assets/restauranfood.jpg"
import React, { useReducer } from 'react';
import BookingForm  from "./BookingForm";

// As part of the reserve-a-table web app functionality, the page will display the existing booked table times and available slots,
//using a list component containing several instances of a BookingSlot component.


//This function will change the availableTimes based on the selected date.
export function updateTimes(state, action){
  if(action.type === 'change_date'){
    return state
  }
  throw Error('Unknown action: ' + action.type);
}
export function initializeTimes (muckt){
  return muckt}
  export default function Bookingpage(){
  const mockupTimes= [
       '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];
  // initial state for the availableTimes.
  

  // const [availableTimes, setAvailableTimes] = useState([
  //   '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  // ]);
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes,initializeTimes(mockupTimes));


    return(<main className="main-content">
        {/* <h1>hola reservas</h1> */}
             <div className="image-container-booking">
                 <img  src={ResturantFood} alt="Resturant food"/>
             </div>

        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
    </main>)
}

// export function Bookingform({availableTimes, setAvailableTimes}){


//   const [date, setDate] = useState("");
//   const [guests, setGuests] = useState(availableTimes[0]);
//   const [time, setTime] = useState("1");
//   const [occasion, setOccasion] = useState("Birthday");

//   const handleDateChange = (e)=>{
//     setAvailableTimes({type:'change_date', nextDate: e.target.value})
//     setDate(e.target.value)
//   }

//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     console.log('submit form', date, guests, time, occasion)
//     if(Number(guests)<1 || Number(guests) > 10){
//       alert('Number of guests must be between 1 and 10.')
//       return
//     }
//     setDate('');
//     setGuests('1');
//     setOccasion('Birthday');
//     setTime(availableTimes[0]);
//   }

//      return (
//     <form className="booking-form" onSubmit={handleSubmit}>
//         <h2>Reserve a Table</h2>
//       <label htmlFor="res-date">Choose date</label>
//       <input value={date}
//       onChange={handleDateChange}
//       type="date" id="res-date" />
//       <label htmlFor="res-time">Choose time</label>
//       <select value={time}
//       onChange={(e) => setTime(e.target.value)} className="custom-select" id="res-time">
//         {availableTimes.map((item, index) =>(
//           <option key={index}>{item}</option>
//         ))}
//       </select>
//       <label htmlFor="guests">Number of guests</label>
//       <input value={guests}
//       onChange={(e) => setGuests(e.target.value) }
//       type="number" placeholder="1" min="1" max="10" id="guests" />

//       <label htmlFor="occasion">Occasion</label>
//       <select value={occasion}
//       onChange={(e) => setOccasion(e.target.value)} className="custom-select" id="occasion">
//         <option>Birthday</option>
//         <option>Anniversary</option>
//       </select>
//       <button disabled={!date || !guests} type="submit">
//         Make Your reservation
//       </button>
//     </form>
//   );
// }