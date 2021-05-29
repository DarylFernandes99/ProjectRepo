import './Poem.css'
import React, {useState} from 'react'
import {FaRandom, FaDownload} from 'react-icons/fa'
import Server from '../Server'
import PoemsList from './PoemsList'
import axios from 'axios'

function Poem(props) {
 const [phrase,setPhrase] = useState("");
 const [wordCount,setWordCount] = useState(1);
 const [generatedText,setGeneratedText] = useState("");
 const [saveBtn, setSaveBtn] = useState(false);
 const [submitFail, setSubmitFail] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  const headers = { 'accept': 'application/json'}
  const fd = new FormData()
  fd.append('phrase', phrase)
  fd.append('length',wordCount)
  document.getElementById('submitbtn').disabled = true;
  
  await axios.post(Server + 'api/poem/', fd, {headers: headers})
    .then(res => {
        setGeneratedText(res.data.result)
        setSaveBtn(true);
        document.getElementById('submitbtn').disabled = false;
    })
    .catch(error => {
        console.log(error);
        document.getElementById('submitbtn').disabled = false;
        const timer = () => setTimeout(() => {
            setSubmitFail(false);
        }, 4000);
        timer();
        clearTimeout(timer);
    })

 }

 const handleRandom = () => {
  setWordCount(Math.floor(Math.random() * 5) + 1);
  setPhrase(PoemsList[Math.floor(Math.random() * PoemsList.length)])
 }

 const downloadOutput = (data) => {
     var file = new Blob([data], {type: "txt"});
     if (window.navigator.msSaveOrOpenBlob) // IE10+
         window.navigator.msSaveOrOpenBlob(file, "output");
     else { // Others
         var a = document.createElement("a"),
                 url = URL.createObjectURL(file);
         a.href = url;
         a.download = "output";
         document.body.appendChild(a);
         a.click();
         setTimeout(function() {
             document.body.removeChild(a);
             window.URL.revokeObjectURL(url);  
         }, 0); 
     }
 }
 
 return (
  <div className='container'>
   <h1 className={props.isDarkMode ? 'page-heading dark' : 'page-heading'}>Poem Generator</h1>

   <div id='project-intro' className={props.isDarkMode ? 'project-info dark' : 'project-info'}> 
       <p className='text-center'> This project generates a poem based on a phrase given by the user. We have used Embedding along with a LSTM Network. The model was trained on poems written by famous authors such as William Shakespeare, Edmund Spenser, John Donne, Sir Philip Sidney, etc.</p> <br/>
       <p className='text-right fade-out'>
           *Stanza count has to be between 1 - 5
       </p>
   </div>
   <div className='row'>
    <div className='col-12 col-sm-12 col-xs-12 col-md-12 col-lg-6 col-xl-6'>
     <form onSubmit={handleSubmit} method='POST'>
      
      <div className='form-group'>
       <label htmlFor="phrase" className={props.isDarkMode ? 'dark' : ''}>Phrase</label>
       <input className='form-control' type='text' id='phrase' name='phrase' value={phrase} onChange={(e) => {setPhrase(e.target.value)}}/>
      </div>

      <div className='form-group'>
       <label htmlFor="wordCount" className={props.isDarkMode ? 'dark' : ''}>Stanza Count</label>
       <input className='form-control' min='1' max='5' type='number' id='wordCount' name='wordCount' value={wordCount} onChange={(e) => {setWordCount(e.target.valueAsNumber)}} />
      </div>

      <div className='row'>
       <span className='col-2'></span>
       <span className='col-5 text-left'> <button className='btn btn-lg save-btn' type='button' onClick={handleRandom}> <FaRandom /> Random</button> </span>
       <span className='col-5 text-left'> <button id='submitbtn' name='submitbtn' className='btn btn-lg save-btn' type='submit'>Generate</button> </span>
      </div>
     </form>
    </div>
    <div className='col-12 col-sm-12 col-xs-12 col-md-12 col-lg-6 col-xl-6'>
     <textarea className='output-text' name="output" id="output" cols="30" rows="10" value={generatedText} readOnly></textarea>
     <div className='row'>
      <span className='col-4'></span>
      <span className='col-4 text-center'> <h4 className={props.isDarkMode ? 'dark' : ''}> Output </h4> </span>
      <span className='col-4 text-right'> {saveBtn && <button type='button' className='btn save-btn' onClick={() => {downloadOutput(generatedText)}}> <FaDownload/> Save</button>} </span>
     </div>
    </div>
   </div>

   {submitFail && <p className='submit-fail text-center'> Couldn't connect to server. Please try again later. </p>}
  </div>
 )
}

export default Poem
