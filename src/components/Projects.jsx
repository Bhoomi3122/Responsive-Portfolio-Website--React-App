import React from 'react'
import data from "../assets/data.json"
import "../styles/Projects.scss"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  return (
    <div id='project'>
      <h2>Projects</h2>
      <section>
        <article>
            <Carousel showArrows={false} showIndicators={true} showStatus={false} showThumbs={false} interval={2000} infiniteLoop={true} autoPlay={true}>
                {
                    data.projects.map(i=>(
                        <div key={i.title} className='workItem'>
                            <img src={i.image_src} alt={i.title}/>
                            <aside>
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                                <a target='_blank' href={i.project_url}>View Details</a>
                            </aside>
                        </div>
                    ))
                }
                
            </Carousel>
        </article>
       </section> 
    </div>
  )
}

export default Projects
