import Logo from "./assets/Logo.svg";
export default function Header(){
    return(
    <header className="main-head" >
        <img className="logo-header" src={Logo} alt="Little Lemon Logo"/>
    </header>
    )
}