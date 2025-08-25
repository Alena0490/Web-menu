import "./Navbar.css"
import logo from "../img/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import links from "../data"
import { useState, Link } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav>
            <div className="navigation">
                <div className="nav-header">
                    <img src={logo} alt="Alena Pumprová - logo" />
                    <button onClick={() => setShowMenu(!showMenu)}>
  {showMenu ? (
    <GrClose className="menu-icon"/>
  ) : (
    <GiHamburgerMenu className="menu-icon" />
  )}
</button>

                </div>

                <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
                    <ul>
                       { links.map ((oneLink) => {
                           const {id, text, url} = oneLink
                           return <li key={id}>
                            <a href={<Link to="/">Hlavní stránka</Link>}>{text}</a>
                           </li>
                        }
                        )
                       } 
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar