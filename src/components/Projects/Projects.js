import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom';
import List from './List'

function Projects(props) {

 return (
  <>
    <div className='container'>
      {List.map((project) => {
        const{id,name,description,image,link} = project;

        return (
        <div key={id} className={props.isDarkMode ? "card card-dark" : "card"}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 img-box">
            <img src={image} className="card-img" alt={name} />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className={props.isDarkMode ? "card-text card-text-dark" : "card-text"}>{description}</p>
              <p className="project-btn"> <Link to={link}> <span className='btn-link'>Visit Project</span>  </Link> </p>
            </div>
          </div>
        </div>
		
      </div>
      )

      })
      }

      
    </div>
  </>
 )
}

export default Projects