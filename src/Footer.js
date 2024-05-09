import Logo from "./assets/Logo.svg";
export default function Footer(){
    return(
    <footer>
        <figure>
         <img src={Logo} alt="Little Lemon Logo"/>
        </figure>
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
            <figcaption>Doormat Navigation</figcaption>
            <ul>
                <li><a href="https://www.facebook.com/">Facebook</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
                <li><a href="https://twitter.com/">Twitter</a></li>
            </ul>
        </figure>
    </footer>
    )
}