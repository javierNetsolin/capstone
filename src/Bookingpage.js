import ResturantFood from "./assets/restauranfood.jpg"
import { useState, useReducer } from "react"
import BookingForm from "./BookingForm"
import { fetchAPI, submitAPI } from "./api"
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date())

  function initializeTimes(date) {
    return fetchAPI(date)
    }

  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }

  // const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed-booking",{ state:{...formData}});
    }
  }

  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
    return (
        <main className="main-content">
        {/* <h1>hola reservas</h1> */}
             <div className="image-container-booking">
                 <img  src={ResturantFood} alt="Resturant food"/>
             </div>

        <BookingForm availableTimes={availableTimes} setAvailableTimes={dispatch} submitForm={submitForm}/>
    </main>
    )
  }