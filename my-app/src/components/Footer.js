import facebook from '../assets/facebookWhite.png'
import instagram from '../assets/instagramWhite.png'
import twitter from '../assets/twitterWhite.png'

function Footer() {
    return(
        <footer>
            <ul>
                <li>About us</li>
                <li>Portfolio</li>
                <li>contact</li>
                <li>Packages</li>
            </ul>
            <div className='socialMedia'>
                <a>
                    <img src={facebook} alt='facebook logo'/>
                    </a>
                <a>
                    <img src={instagram} alt='instagram logo'/> 
                </a>
                <a>
                    <img src={twitter} alt='twitter logo'/> 
                </a>
            </div>
        </footer>
    )
}

export default Footer;