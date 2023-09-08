import imgContact from "../assets/images/docteur-ordinateur.jpg"

import {useForm} from 'react-hook-form'

import "../styles/Contact.css"

const Contact = () => {

    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm()
    const onSubmit = (data) => console.log(data)
   
    return (
        <>
        <section className="container_contact">
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="section_contact">
                    <h1>Nous contacter</h1>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </section>
                

                <label>Nom :</label>
                <input 
                    {...register("lastname", {
                        required: true 
                    })} 
                />
                {errors.lastname && <span>Merci de complèter le champ Nom</span>}

                <label>Prénom :</label>
                <input 
                    {...register("firstname", {
                        required: true,    
                    })} 
                />
                {errors.firstname && <span>Merci de complèter le champ Prénom</span>}

                <label>Email :</label>
                <input
                    {...register("mail", {
                        required: true,
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'Merci de saisir une adresse email valide'
                        }  
                    })} 
                />
                {errors.mail && <span>Merci de complèter le champ Email</span>}

                <label>Message :</label>
                <textarea
                    {...register("message", {
                        required: true,
                    })}
                />
                {errors.message && <span>Merci de complèter le champ Message</span>}

                <input type="submit" />
            </form>
            <img src={imgContact} id="img_contact" />
        </section>
        </>
    )
}

export default Contact