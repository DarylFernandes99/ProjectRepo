import React from 'react'
import './About.css'
import Devs from './Devs'
import {FaQuoteLeft, FaQuoteRight, FaGithub,FaLinkedin,FaPhone,FaAt,FaHackerrank,FaWhatsapp} from 'react-icons/fa'

function About(props) {
  
 return (
  <>
   <div className='container'>
     <h1 className={props.isDarkMode ? 'page-heading dark' : 'page-heading'}>Developers</h1>
     <div className='row'>
      {Devs.map((dev) => {
        const{id,name,avatar,role,description,email,phone,github_url,linkedin_url,hackerrank_url,whatsapp_url} = dev;

        return <div key={id} className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          <div className={props.isDarkMode ? 'card dark-card' : 'card'}>
            <div className={props.isDarkMode ? 'profile-pic profile-pic-dark text-center' : 'profile-pic text-center'}>
              <img src={avatar} alt={name}/>
            </div>
            <h3 className={props.isDarkMode ? 'dev-name dev-name-dark text-center' : 'dev-name text-center'}> {name} </h3>
            <span className={props.isDarkMode ? 'dev-role dev-role-dark text-center' :'dev-role text-center'}> {role} </span>
            <p className='dev-description text-center'>
              <FaQuoteLeft className='quote-right'/>
                {description}
              <FaQuoteRight className='quote-left'/>
            </p>
            <div className='dev-icons'>
              <ul className={props.isDarkMode ? 'icon-list icon-list-dark' : 'icon-list'}>
                {email && <li> <a href={email} className='icon' target='_blank' rel='noreferrer'> <FaAt /> </a></li>}
                {phone && <li> <a href={phone} className='icon' target='_blank' rel='noreferrer'> <FaPhone /> </a></li>}
                {github_url && <li> <a href={github_url} className='icon' target='_blank' rel='noreferrer'> <FaGithub /> </a></li>} 
                {linkedin_url && <li> <a href={linkedin_url} className='icon' target='_blank' rel='noreferrer'> <FaLinkedin /> </a></li>}
                {hackerrank_url && <li> <a href={hackerrank_url} className='icon' target='_blank' rel='noreferrer'> <FaHackerrank /> </a></li>}
                {whatsapp_url && <li> <a href={whatsapp_url} className='icon' target='_blank' rel='noreferrer'> <FaWhatsapp /> </a></li>}

              </ul>
            </div>
          </div>
        </div>
      })
      }
      

     </div>
   </div>
  </>
 )
}

export default About
