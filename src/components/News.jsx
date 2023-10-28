import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import {displayAllNews} from '../api/News'
import {config} from "../config"
import 'react-multi-carousel/lib/styles.css'
import '../styles/news.css'


const News = () => {
    const [news, setNews] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      displayAllNews()
      .then((res)=>{
          setNews(res.result) /*Update the news state with the result data*/
          setLoading(false)
      })
      .catch(err => {
        /*Log an error message if the fetching fails*/
          setError("Une erreur s’est produite lors de la récupération des actualités.")
          setLoading(false)
      })
  }, []) /*Empty dependency array means this useEffect runs once on component mount*/


  return (
    <>
    <h2>Les actualités santé</h2>
    {loading ? (
      <p>Chargement des actualités</p>
    ) : (
      news.length > 0 && (
      <Carousel 
      key={news.length}
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
            partialVisible
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
                items: 2,
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
                partialVisibilityGutter: 0
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
        {news.map((item, index)=>{
            return (
              <div key={item.id || index}>
                  <section  className="box-news">
                    <img src={config.pict_url + item.picture} className='img-news' alt={item.title}/>
                    <h3>{item.title}</h3>
                    <p>{item.details}</p>
                    <Link to={item.external_link} 
                            target='_blank' 
                            rel="noreferrer"
                            aria-label="Visiter la page officielle (s'ouvre dans un nouvel onglet)"
                            className="news-link"
                        >
                            Lire la suite
                        </Link>
                  </section>
              </div>
            )
        })}
        {error && <div className="error-message">{error}</div>}
        </Carousel>
    )
    


    )}
    

        
    </>
        
  )
}
        

export default News