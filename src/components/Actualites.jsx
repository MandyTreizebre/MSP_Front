import React, {useState, useEffect} from "react"
import { getAllActus } from "../api/Actualites"
import { config } from "../config"
import { Link } from "react-router-dom"
import '../styles/Actualites.css'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Actualites = () => {
    const [actualites, setActualites] = useState([])

  useEffect(()=>{
        getAllActus()
        .then((res)=>{
            setActualites(res.result)
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
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
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


    {actualites.map((actu)=>{
        return (
            <div key={actu.id} className="box_actus">
                <img src={config.pict_url+actu.image} id="img_actus" />
                <h3>{actu.titre}</h3>
                <p>{actu.details}</p>
                <Link to={actu.lien}><button id="bouton">En savoir plus</button></Link>
            </div>
        )
    })}

</Carousel>
        );
}

export default Actualites
