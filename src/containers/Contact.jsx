import imgContact from "../assets/images/docteur-ordinateur.jpg"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import Modal from "../components/Modals/Modal"
import "../../sass/styles/contact.css"

const Contact = () => {
    const [openModal, setOpenModal] = useState(false)
    const [message, setMessage] = useState('')
    const maxCharacters = 500 /*Maximum characters allowed for the message*/

    /*EmailJS configurations from environment variables*/
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID 
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID 
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY 

    /*Handler for message input, ensures character count doesn't exceed maxCharacters*/
    const handleChange = (e) => {
        const inputText = e.target.value
        if(inputText.length <= maxCharacters){
            setMessage(inputText)
        }
    }

    /*Function to close the modal*/
    const handleCloseModal = () => {
        setOpenModal(false)
    }
   
    /*Reference to the form for EmailJS*/
    const form = useRef()

    /*Function to send email using EmailJS*/
    const sendEmail = (e) => {
        e.preventDefault()

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then((result) => {
          if(result.status === 200){
            setOpenModal(true) /*Show the modal upon successful email submission*/
            setTimeout(()=> {
                handleCloseModal() /*Close the modal after 5 seconds*/
            }, 5000)
          }
          e.target.reset() /*Reset the form fields*/
      }, (error) => {
          return(error.text) /*Handle errors (consider showing a UI feedback to the user)*/
      })
  }
    return (
        <>
            <section className="container-contact">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="div-contact">
                        <h1>Nous contacter</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    
                    {/* Fields for the user to fill out */}
                    <label>Nom</label>
                    <input type="text" 
                        name="user_name"
                        maxLength="50"
                        required 
                    />

                    <label>Email</label>
                    <input type="email" 
                        name="user_email"
                        maxLength="50"
                        required 
                    />

                    <label>Message</label>
                    <textarea name="message" 
                            maxLength={maxCharacters} 
                            onChange={handleChange}
                    />
                    <div className="character-count">
                        {maxCharacters - message.length} caractères restants
                    </div>

                    <input type="submit" 
                        value="Envoyer" 
                        className="general-button"/>
                </form>
                <img src={imgContact} className="img-contact" alt="Photo d'un homme devant un ordinateur" />
            </section>
            <Modal open={openModal} onClose={handleCloseModal} message="Message envoyé" />
        </>
    )
}

export default Contact