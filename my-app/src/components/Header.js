import '../style/Header.css'
import logoSquare from '../assets/whiteLongLogo.svg'

function Header() {
    return (
        <div>
            <header className='header'>
                <a className='logo'><img  src={logoSquare} style={{width: '100%'}}alt='Mora Designs Logo' /></a>
                <nav className='nav'>
                    <p>About</p>
                    <p>Portfolio</p>
                    <p>Contact</p>
                    <p>Packages</p>
                </nav>
            </header>
        </div>
    )
}

export default Header;