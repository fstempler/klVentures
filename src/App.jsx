
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  

  return (
    <div>
      <ContactForm />
      <Header />
      <Features />
      <Footer />
      <ToastContainer />
    </div>
    
  )
}

export default App
