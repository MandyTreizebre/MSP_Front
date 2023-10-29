import {Link} from "react-router-dom"
import imgNotFound from "../../src/assets/images/not-found.jpg"
import "../../sass/styles/notFound.css"

const NotFound = () => {

  return (
    <div className="container-not-found">
    <img src={imgNotFound} alt="illustration d'un 404" id="img-404"/>
        <h1>Page Not Found</h1>
        <p>Nous sommes désolés, la page demandée n'a pu être trouvée, veuillez retourner à la page d'accueil</p>
        <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  )
    
}
export default NotFound