import imgContact from "../assets/images/docteur-ordinateur.jpg"

import "../styles/Contact.css"

const Contact = () => {
    return (
        <section className="container_contact">
            <form>
                <h1>Nous contacter</h1>
                <label>
                    Nom :
                    <input 
                    type="text" 
                    name="nom" 
                    />
                </label>  
                <label>
                    Prénom :
                    <input 
                    type="text" 
                    name="prenom" 
                    />
                </label>  
                <label>
                    Email :
                    <input 
                    type="text" 
                    name="email" 
                    />
                </label>  
                <label>
                    Message :
                    <textarea 
                    type="text" 
                    name="message" 
                    />
                </label>  
                <button id="bouton">Envoyer</button>
            </form>
            <img src={imgContact} id="img_contact" />
            
        </section>
    )
}

export default Contact