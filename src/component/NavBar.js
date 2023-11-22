import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to={"/MainPage"}>Home</Link>                
            </li>
            <li>
                <Link to={"/Houses"}>Casas</Link>                
            </li>
            <li>
                <Link to={"/Characters"}>Characters</Link>                
            </li>
        </ul>
    )
}

export default NavBar;