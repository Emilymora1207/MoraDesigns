import '../style/Header.css'
import logoSquare from '../assets/whiteLongLogo.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className='header'>
                <Link to='/' className='logo'><img  src={logoSquare} style={{width: '100%'}}alt='Mora Designs Logo' /></Link>
                <nav className='nav'>
                    <Link className='nav-link' to='/about'>About</Link>
                    <Link className='nav-link' to='/designs'>Portfolio</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                    <Link className='nav-link' to='/packages'>Packages</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;