import React,{useState} from 'react'
import './Contact.css'
import axios from 'axios'
import Server from '../Projects/Server'

function Contact(props) {
 const[email,setEmail] = useState('');
 const[subject,setSubject] = useState('');
 const[message,setMessage] = useState('');
 const[submitSuccess, setSubmitSuccess] = useState(false);
 const[submitFail, setSubmitFail] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  document.getElementById("submit-button").disabled = true;
  await sendData(email,subject,message);
 }

 const sendData = async (email,subject,message) => {

      const headers = {
          'accept': 'application/json'
      }
      const fd = new FormData()
      fd.append('email', email);
      fd.append('subject', subject);
      fd.append('message', message);

      await axios.post(Server + 'api/feedback/', fd, {headers: headers})
          .then(res => {
            setSubmitSuccess(true);
            document.getElementById("submit-button").disabled = false;
            const timer = () => setTimeout(() => {
                setSubmitSuccess(false);
                setEmail('');
                setSubject('');
                setMessage('');
            }, 4000);
            timer();
            clearTimeout(timer);
          })
          .catch(error => {
            setSubmitFail(true);
            document.getElementById("submit-button").disabled = false;
            const timer = () => setTimeout(() => {
                setSubmitFail(false);
            }, 4000);
            timer();
            clearTimeout(timer);
            console.log(error);
          })
}
 

 return (
  <div className='container'>
   <h1 className={props.isDarkMode ? 'page-heading dark' : 'page-heading'}>Contact Form </h1>
   <form className='contact-form text-center' onSubmit={(e) => handleSubmit(e)}>
    <div className='form-group'>
     <label htmlFor="email" className={props.isDarkMode ? 'dark' : ''}>Email</label>
     <input className='form-control' type='email' placeholder='Optional' id='email' name='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
    </div>

    <div className='form-group'>
     <label htmlFor="subject" className={props.isDarkMode ? 'dark' : ''}>Subject</label>
     <input className='form-control' placeholder='Required' id='subject' name='subject' value={subject} type="text" onChange={(e) => {setSubject(e.target.value)}} required/>
    </div>

    <div className='form-group'>
     <label htmlFor="message" className={props.isDarkMode ? 'dark' : ''}>Message</label>
     <textarea className='form-control text-area' placeholder='Required' value={message} name="message" id="message" onChange={(e) => {setMessage(e.target.value)}} cols="30" rows="5" required></textarea>
    </div>

    <div className='text-center'>
     <button id="submit-button" name="submit-button" className='submit-btn' type='submit'>Submit</button>
    </div>
    
    {submitSuccess && 
    ( (email === "" || email === undefined) ? 
      <p className='submit-success text-center'> Form submitted successfully. </p> : 
      <p className='submit-success text-center'> Acknowledge email has been sent to {email} </p>
    )
    }
    {submitFail && <p className='submit-fail text-center'> Form submission failed. </p>}
    
   </form>

  </div>
 )
}


export default Contact
