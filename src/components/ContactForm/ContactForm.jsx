import logo from '../../assets/logo.webp';
import img1 from '../../assets/kl-5.avif';
import './contactForm.css';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ isOpen, onClose }) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [project, setProject] = useState('');
    const [subject, setSubject] = useState('');
    const [projectURL, setProjectURL] = useState('');
    const [target, setTarget] = useState('');
    const [label, setLabel] = useState('');


    

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflowHidden');
        } else {
            document.body.classList.remove('overflowHidden');
        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
    
        try {
            await sendEmail(e); // Espera a que se complete el envío del correo electrónico antes de continuar
    
            // Limpia los campos después de enviar
            setFullName('');
            setEmail('');
            setPhone('');
            setProject('');
            setSubject('');
            setProjectURL('');
            setTarget('');
            setLabel('');
    
            toast.success('👍 Thank you! We will get in contact soon.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
    
            onClose();
        } catch (error) {
            // Maneja errores de envío de correo electrónico aquí
            console.error("Error sending email:", error);
            toast.error('Oops! Something went wrong. Please try again later.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
    
    const sendEmail = async (e) => {
        try {
            // Llama a la función de envío de correo electrónico aquí
            const result = await emailjs.sendForm(
                'service_nu60kvn',
                'template_zo9re8v',
                e.target, // Asegúrate de que e.target esté disponible aquí
                'kawIe2FBZ20LSsXyk'
            );
    
            // Puedes verificar el resultado del envío de correo electrónico aquí si es necesario
            console.log("Email sent:", result);
        } catch (error) {
            // Maneja errores de envío de correo electrónico aquí
            console.error("Error sending email:", error);
            throw error; // Lanza el error para que se maneje en handleSubmit()
        }
    };
    


    function isEmailValid(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email)
    }

    

    const validateForm = () => {

        if (fullName.trim() === '') {
            toast.error('Sorry, Full Name must be complete', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                }); 
            return false;    
        }

        if (email.trim() === '') {
            toast.error('Sorry, Email must be complete', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                }); 
                return false
        }

        if (!isEmailValid(email)) {
            toast.error('Invalid Email', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                }); 
                return false
        }

        if (!phone.match(/^\+?\d+$/)){
            toast.error('Invalid Phone Number', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                return false 
        }
        if (project.trim() === ''){
            toast.error('Sorry, Project Name must be complete', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                return false 
        }
        if (subject.trim() === ''){
            toast.error('Sorry, Subject must be complete', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                return false 
        }
        if (projectURL.trim() === ''){
            toast.error('Sorry, Project plan URL must be complete', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                return false 
        }
        if (target.trim() === ''){
            toast.error('Sorry, Target Industry must be complete', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                return false 
        }
        if (label.trim() === ''){
            toast.error('Please, add your label', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                return false 
        }

        return true;
    }

    return (
        <div id="contact__Popup" className={`popup ${isOpen ? 'open' : ''}`}>
            
            <div className="grid__Form">
            <span className="close-btn" id="close-popup-btn" onClick={onClose}><i className="bi bi-x-circle-fill close__Btn"></i></span>
                <div className="colIzq"> 
                    <div className='form__Img'>
                        <img src={logo} alt="Logo" />
                        <img src={img1} alt="Image 1" />
                    </div>
                </div>
                <div className="colDer"> 
                    <div className='colDer__Text'>
                        <h2>Let's build something great</h2>
                    </div>
                    <div className='form__Container'>
                    <form noValidate onSubmit={handleSubmit}>
                        <input type="text"
                            id="fullname"
                            name="fullname"
                            placeholder='   Full Name'                            
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                            required
                            />                        
                                                
                        <input type="email"
                            id="email"
                            name="email"
                            placeholder="   Email" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            />
                                                
                        <input type="number"
                            id="phone"
                            name="phone"
                            placeholder="   Phone" 
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            required
                            />
                        
                        
                        <input type="text"
                            id="project"
                            name="project"
                            placeholder="   Project Name" 
                            onChange={(e) => setProject(e.target.value)}
                            value={project}
                            required
                            />
                        
                        
                        <input type="text"
                            id="subject"
                            name="subject"
                            placeholder="   Subject Matter" 
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                            required
                            />
                        
                        
                        <input type="text"
                            id="projectURL"
                            name="projectURL"
                            placeholder="   Project's executive business plan URL" 
                            onChange={(e) => setProjectURL(e.target.value)}
                            value={projectURL}
                            required
                            />                        
                        
                        <input type="text"
                            id="target"
                            name="target"
                            placeholder="   Target Industry" 
                            onChange={(e) => setTarget(e.target.value)}
                            value={target}
                            required
                            />
                        
                        
                        <input type="text"
                            id="label"
                            name="label"
                            placeholder="   Add Your Label" 
                            onChange={(e) => setLabel(e.target.value)}
                            value={label}
                            required
                            />

    
                        <button 
                        type='submit' 
                        className='button__Contact'                         
                        >Submit</button>

                    </form>

                    </div>
                </div>
            </div>                   
            
            
        </div>
    );
};

export default ContactForm;
