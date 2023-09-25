import ContactForm from '../ContactForm/ContactForm';
import { useEffect, useState } from 'react';
import img1 from '../../assets/kl-1.avif';
import img2 from '../../assets/kl.2.avif';
import img3 from '../../assets/kl-3.avif';
import img4 from '../../assets/kl-4.webp';
import client from '../../assets/client1.avif';
import company1 from '../../assets/kl-comp-1.webp';
import company2 from '../../assets/kl-comp-2.webp';
import company3 from '../../assets/kl-comp-3.webp';
import company4 from '../../assets/kl-comp-4.webp';

import './features.css';

const Features = () => {

    const [popupOpen, setPopupOpen] = useState(false);
    useEffect(() => {
        if (popupOpen) {
            document.body.classList.add('overflowHidden');
        } else {
            document.body.classList.remove('overflowHidden');
        }
    }, [popupOpen]);

    return (
        <>
        <div className="features__Container">
            <div className="features__Text-Container"> 
                <h1 className='features__Main-Title'>Empowering Technology Start-Ups</h1>
                <p className='features__Text'>Krauss & Livic is an engineering venture capital firm with its own software development company, focused on propelling the growth of early-stage tech start-ups. We provide capital, potential MVPs, and guidance to transform concepts into successful enterprises. Additionally, we offer essential advice, expertise, and comprehensive support for launching and managing technology-focused ventures. </p>
                <button className='button__Contact' onClick={() => setPopupOpen(true)}>
                        Contact Us  <i className="bi bi-arrow-down"></i>
                </button>
            </div>
            <div className='features__Img-Container'>
                <img src={img1}></img>
            </div>
        </div>
        <div className='features__Work-Container'>
            <div className='features__Work-Title-Container'>
                <h2 className='features__Title'>
                    How We Work
                </h2>
            </div>
            <div className='features__Work-Text-Container'>
                <p className='features__Work-Text'>We engage our team in two ways. You can either apply to our equity program or you can partner with us to be your technology hand directly. We can engage with you and your team at whatever level or configuration works for your business.</p>
            </div>
        </div>
        <div className='features__Specs-Container'>
            <div className='features__Specs-Img-Container'>
                <div className='features__img2-Container'>
                    <img className='img2' src={img2} />
                </div>
                <div className='features__img3-Container'>
                    <img className='img3' src={img3} />
                </div>
                
            </div>
            <div className='features__Specs-Info-Container'>
                <div className='features__Specs-Title-Container'>
                    <h2 className='features__Title'>
                        Equity Program
                    </h2>
                </div>
                <div className='features__Specs-Text-Container'>
                    <p className='features__Specs-Text'>
                        The equity program is a venture capital program that can take different approaches to help startups with the funding that enables and shapes their future on the road to creating value in your domain or market innovation
                        We engage with the startup's team in certain working configurations according to the stage
                    </p>
                </div>
                <div className='features__Specs-Button'>
                    <button className='button__Contact' onClick={() => setPopupOpen(true)}>
                        Learn More  <i className="bi bi-arrow-down"></i>
                    </button>
                </div>
                {/* SE REPITE */}
                <div className='features__Title'>
                    <h2 className='features__Title'>
                        Tech Partner
                    </h2>
                </div>
                <div className='features__Specs-Text'>
                <p className='features__Specs-Text'>
                The equity program is a venture capital program that can take different approaches to help startups with the funding that enables and shapes their future on the road to creating value in your domain or market innovation We engage with the startup's team in certain working configurations according to the stage
                    </p> 
                </div>
                <div className='features__Specs-Button'>
                    <button className='button__Contact' onClick={() => setPopupOpen(true)}>
                        Learn More  <i className="bi bi-arrow-down"></i>
                    </button>
                </div>
            </div>
        </div>
        <div className='client__Title'>
                <h2 className='features__Title'>
                    What Our Clients Have To Say
                </h2>
            </div>
        <div className='client__Container'>            
                <div className='client__Img'>
                    <img className='client' src={client} />
                </div>
                <div className='client__Info'>               
                    <div className='client__Info-Text-Container'>
                        <p className='client__Info-Text'>
                        You helped me on the seed capital stage with the right business plan that turns me to jump into the market right away  
                        </p>
                        <h6 className='client__Info-Name'>  
                            Rob Donnaldson
                        </h6>
                    </div>
                    <div className='client__Info-Button'>
                        <button className='button__Contact' onClick={() => setPopupOpen(true)}>
                            Contact Us  <i className="bi bi-arrow-down"></i>
                        </button>
                    </div>          
                </div>                  
        </div>
        <div className='companies__Container'>
            <div className='companies__Info'>
                <h2 className='features__Title'>
                    Companies We've Helped
                </h2>
                <p className='companies__Info-Text'>
                    We love helping companies of all shapes and sizes be more successful. Whether we’re investing directly in an organization or simply providing consulting services, we treat every project like a true partnership.
                </p>
            </div>
            <div className='companies__Img'>
                <img className='companyImg' src={company1} />
                <img className='companyImg' src={company2} />
                <img className='companyImg' src={company3} />
                <img className='companyImg' src={company4} />
            </div>
        </div>
        <div className="features__Footer-Container">
            <div className="features__Text-Container"> 
                <h1 className='features__Main-Title'>Let's Build Your Start-Up!</h1>
                <p className='features__Text'>We are extremely exclusive. We have a limited capacity and we only work on great ideas we absolutely believe in. If you have an innovative start-up or a successful business and you need next-level technology support, apply to work with us today!</p>
                <button className='button__Contact' onClick={() => setPopupOpen(true)}>
                        Contact Us  <i className="bi bi-arrow-down"></i>
                </button>
            </div>
            <div className='features__Footer-Img-Container'>
                <img src={img4}></img>
            </div>
        </div>
        <ContactForm isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
        
        </>
    )
}

export default Features