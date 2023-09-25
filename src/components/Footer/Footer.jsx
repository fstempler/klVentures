import logo from '../../assets/logo.webp';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer__Container">
            <div className='footer__logo'>
                <img src={logo} alt="Krauss & Livic Ventures Logo" />
            </div>
            <div className='footer__Copyright'>
                <p>© 2010 Krauss & Livic - All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer;
