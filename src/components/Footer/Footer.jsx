import './Footer.css'
import logo from "../../assets/logo.svg"

function Footer() {

    return (
        <>
            <footer>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li><a href="">Copyright © Cleaning X | Designed by</a></li>
                    <li><a href="">BRIX Templates</a></li>
                    <li><a href="">- Powered by</a></li>
                    <li><a href="">Webflow</a></li>
                    <li><a href="">Licenses</a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer