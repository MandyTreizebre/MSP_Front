import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

/*Importation du fichier config (vers le back)*/
import { config } from "../config"

/*Importation de la fonction displayAllNews pour appeler les actualités*/ 
import { displayAllNews } from "../api/News"

/*Importation du style*/
import '../styles/news.css'
import '../styles/mobiles/mobileNews.css'
import '../styles/tablets/tabletNews.css'

/*Importation du composant de la biblio carousel et des styles du carousel*/
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const News = () => {
  /*Déclaration de l'état news avec un tableau vide comme valeur initiale*/
    const [news, setNews] = useState([])

  useEffect(()=>{
        displayAllNews()
        .then((res)=>{
          /*Mise à jour de news avec les données obtenues par displayAllNews*/
            setNews(res.result)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  partialVisbile
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: {
        max: 767,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 2,
      partialVisibilityGutter: 70
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

  {/* Map sur les éléments du tableau news et affichage des éléments*/}
    {news.map((event)=>{
        return (
            <div key={event.id} className="box_news">
                <img src={config.pict_url+event.picture} id="img_news" />
                <h3>{event.title}</h3>
                <p>{event.details}</p>
                <Link to={event.external_link}><button className="general_button">En savoir plus</button></Link>
            </div>
          
        )
    })}

</Carousel>
        );
}

export default News
