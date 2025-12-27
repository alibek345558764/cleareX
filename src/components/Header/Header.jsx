import './Header.css'
import logo from "../../assets/logo.svg"

function Header() {

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Artcles</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="header-btns">
                        <button className='cart-btn'>Cart (0)</button>
                        <button>Get a free quote</button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header