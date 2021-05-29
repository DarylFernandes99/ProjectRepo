import React from 'react';
import './Home.css'

const Home = (props) => {
    return (
        <div className={props.isDarkMode ? 'container-fluid dark' : 'container-fluid'}>
            <h1 className={props.isDarkMode ? 'page-heading dark' : 'page-heading'}>What is ProjectRepo ?</h1><br/>
            <p className={props.isDarkMode ? 'container lorem dark text-center' : 'container lorem text-center'}	>
                ProjectRepo is a Web Application that allows users to test and access the various projects that we've made over time. A Web application that consists of a collection of tools that helps users perform various tasks such as colorizing images, enhancing images taken in dimly lit environments, generate random poems, and much more. The front end of the Web Application is built using React.Js and the back end with Django. From a design and SEO point of view, the load time of a site is very important, Sites that take a longer time to load could lose the user's attention, we chose React.Js since its speed, stability, and flexibility are top tiers.  ProjectRepo will be kept updated with our latest creations keep checking so you do not miss out on our recent Developments/Projects!
            </p>
        </div>
    );
}

export default Home;