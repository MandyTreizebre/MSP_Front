import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'

import { displayAllNews } from '../api/News'
import { config } from '../config'

import 'react-multi-carousel/lib/styles.css'
import '../styles/news.css'

const News = () => {
  /*State hooks for holding the news data and any error messages*/
    const [news, setNews] = useState([])
    const [error, setError] = useState(null)

    /*Effect hook to get news data once the component mounts*/
    useEffect(()=>{
        displayAllNews()
        .then((res)=>{
            setNews(res.result) /*Update the news state with the result data*/
        })
        .catch(err => {
          /*Log an error message if the fetching fails*/
            setError("Une erreur s’est produite lors de la récupération des actualités.")
        })
    }, []) /*Empty dependency array means this useEffect runs once on component mount*/

    return (
      <>
        <h2>Les actualités santé</h2>
        {/* Carousel component from react-multi-carousel library for displaying news items */}
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

        {/* Mapping over the fetched news data to generate a list of news items */}
        {news.map((item)=>{
            return (
                <section key={item.id} className="box-news">
                    {/* Displaying the image, title, and details of each news item */}
                    <img src={config.pict_url + item.picture} className="img-news" alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.details}</p>
                    {/* Link to the full news article */}
                    <Link to={item.external_link} 
                        target='_blank' 
                        rel="noreferrer"
                        aria-label="Visiter la page officielle (s'ouvre dans un nouvel onglet)"
                    >
                        <button className="general-button">Lire la suite</button>
                    </Link>
                </section>
            )
        })}
        {/* Display an error message if there was a problem fetching the news data */}
        {error && <div className="error-message">{error}</div>}
      </Carousel>
    </>
  )
}

export default News
