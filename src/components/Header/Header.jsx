import ContactForm from '../ContactForm/ContactForm';
import logo from '../../assets/logo.webp';
import './header.css';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () =>{

    const [popupOpen, setPopupOpen] = useState(false);
    useEffect(() => {
        if (popupOpen) {
            document.body.classList.add('overflowHidden');
        } else {
            document.body.classList.remove('overflowHidden');
        }
    }, [popupOpen]);

    return (
        <header>
            <div className='container'>
                <div className='container__Logo'>
                    <img src={logo} alt='Krauss & Livic Logo' className='logo'/>
                </div>
                <div className='container__Button'>
                    <button className='button__Contact' onClick={() => setPopupOpen(true)}>
                        Contact Us  <i className="bi bi-arrow-down"></i>
                    </button>
                </div>
                
            </div>            
            <ContactForm isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
        </header>
    )
}

export default Header