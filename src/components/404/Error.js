import React from 'react'
import { Link } from 'react-router-dom';
import './Error.css'

function Error(props) {
 return (
  <div className='container' id="notfound">
		<div className={props.isDarkMode ? "notfound notfound-dark" : "notfound"}>
			<div className={props.isDarkMode ? "notfound-404 notfound-404-dark" : "notfound-404"}>
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
   <Link to={'/'}>Go Back Home</Link>
		</div>
	</div>
 )
}

export default Error
