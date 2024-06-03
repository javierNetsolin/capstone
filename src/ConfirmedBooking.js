import ResturantFood from './assets/restauranfood.jpg'
import { useLocation } from 'react-router-dom'
export default function ConfirmedBooking(){
    const {state} = useLocation();
    const {date,guests,time, occasion} = state;
    console.log('state', state)
    return (<main className="main-content">
        {/* <h1>hola reservas</h1> */}
             <div className="image-container-booking">
                 <img  src={ResturantFood} alt="Resturant food"/>
             </div>

        <div className="confirmed-booking">
            <h2>Congratulations! Your booking is confirmed.</h2>
            <div>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Number of Guests:</strong> {guests}</p>
            <p><strong>Occasion:</strong> {occasion}</p>
            </div>
        </div>
    </main>)
}