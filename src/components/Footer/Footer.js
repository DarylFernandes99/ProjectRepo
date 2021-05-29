import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="footer-main footer-custom">
            <div className='container-fluid'>
                <div className={props.isDarkMode ? "footer-bottom dark-footer" : "footer-bottom"}>
                    <p className="footer-text">
                        <span className='col-6 text-left'> 
                            &copy;{new Date().getFullYear()} Project Repository - All Rights Reserved
                        </span> <br />
                        <span className='col-6 text-right'>
                            Email : <a href="mailto:projectrepotk@gmail.com">projectrepotk@gmail.com</a>
                        </span>
                    </p>
                </div>
            </div>
		</div>
    );
}

export default Footer;