/* COMPONENT UNDER EMERGENCIES */ 

/*Importing modules, styles and pictures*/
import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

import '../styles/news.css'
import '../styles/mobiles/mobileNews.css'
import '../styles/tablets/tabletNews.css'

/*Import config file (to back)*/
import { config } from "../config"

/*Importing the displayAllNews function to call up news items*/
import { displayAllNews } from "../api/News"

/*Importing the carousel library component and carousel styles*/
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const News = () => {
  /*Declaration of news state with an empty array as initial value*/
    const [news, setNews] = useState([])

  useEffect(()=>{
        displayAllNews()
        .then((res)=>{
          /*News updates with data from displayAllNews*/
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
              items: 4,
              partialVisibilityGutter: 0
            },
            laptop: {
              breakpoint: {
                max: 1470,
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

  {/*Map on news items and display of items*/}
    {news.map((event)=>{
        return (
            <div key={event.id} className="box_news">
                <img src={config.pict_url+event.picture} id="img_news" alt={event.title} />
                  <h3>{event.title}</h3>
                  <p>{event.details}</p>
                  <Link to={event.external_link} target='_blank' rel="noreferrer">
                    <button className="general_button">Lire la suite</button>
                  </Link>
            </div>
          
        )
    })}

</Carousel>
        );
}

export default News
