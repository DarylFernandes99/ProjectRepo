import React, { useState, useRef, useReducer } from 'react';
import { saveAs } from 'file-saver'
import axios from 'axios'
import {FaUpload, FaQuestion, FaArrowRight,FaArrowDown} from 'react-icons/fa'
import {ImSpinner2} from 'react-icons/im'
import './Colorize.css'
import Server from '../Server'


// Current state of the system
const stateMachine = {
    initial: 'initial',
    states: {
        initial: {on: {next: 'ready'}},
        ready: {on: {next: 'complete'}, showImage: true},
        complete: {on: {next: 'initial'}, showImage: true}
    }
}

// Changes to the next state from the current state
const reducer = (currentState, event) => stateMachine.states[currentState].on[event] || stateMachine.initial;

const Input = (props) => {

    const [state, dispatch] = useReducer(reducer, stateMachine.initial);
    const [predicted, setPredicted] = useState(false)
    const [imageUrl, setImageUrl] = useState(null);
    const [saveBtn, setSaveBtn] = useState(false);
    const [outputImageUrl, setOutputImageUrl] = useState(null);
    const [submitFail, setSubmitFail] = useState(false);
    const inputRef = useRef();
    const imageRef = useRef();

    //Initializing Reducer
    const next = () => dispatch('next');

    const handleUpload = event => {
        const { files } = event.target;
        if (files.length > 0) {
            document.getElementById("inputImage").disabled = true
            document.getElementById("upload-btn").disabled = true
            document.getElementById("upload-btn").classList.add("fade-out");
            const url = URL.createObjectURL(files[0]);
            setImageUrl(url);
            
            var reader = new FileReader();
            reader.onloadend = async function() {
                // console.log('RESULT', reader.result)
                await sendData(reader.result)
            }

            document.getElementById("processing-icon").style.display = 'block';
            document.getElementById("output-icon").style.display = 'none';
            reader.readAsDataURL(files[0]);
            //Transition from Upload Image to Colorize image
            next();
        }
    }

    const sendData = async (canvas) => {

        const headers = {
            'accept': 'application/json'
        }
        const fd = new FormData()
        fd.append('image', canvas)

        await axios.post(Server + 'api/colorize/', fd, {headers: headers})
            .then(res => {
                // console.log(res.data)
                setPredicted(res.data.predicted)
                setOutputImageUrl(res.data.result)
                setSaveBtn(true);
            })
            .catch(error => {
                setSubmitFail(true);
                const timer = () => setTimeout(() => {
                    setSubmitFail(false);
                }, 4000);
                timer();
                clearTimeout(timer);
            })
        
        document.getElementById("upload-btn").disabled = false
        document.getElementById("upload-btn").classList.remove("fade-out");
        next()
    }

    const reset = () => {
        setImageUrl(null);
        document.getElementById("inputImage").value = ""
        setPredicted(false)
        setOutputImageUrl('')
        document.getElementById("inputImage").disabled = false;
        setSaveBtn(false);
        //Transition from Upload Another Image to Upload Image
        next();
    }

    const identify = async () => {
        // console.log(imageRef.current.src.substr(5))
        next()
        next()
    }

    const buttonProps = {
        initial: {text: 'Upload Image', action: () => inputRef.current.click()},
        ready: {text: 'Processing the Image', action: identify},
        complete: {text: 'Upload Another Image', action: () => {reset()}}
    }

    const handleSave = () => {
        saveAs(outputImageUrl, 'output.jpg');
    }

    //Image preview should be displayed or not
    const {showImage = false} = stateMachine.states[state];

    return (
        <div className='container'>
            <h1 className={props.isDarkMode ? 'page-heading dark' : 'page-heading'}>Colorize Image</h1>

            <div id='project-intro' className={props.isDarkMode ? 'project-info dark' : 'project-info'}> 
                <p className='text-center'> This project consists of a machine learning model which aims to add color to grayscale or black and white images uploaded by the user. We have used a 8 layered Convolutional Neural Network to train our model on the Random Name Dataset. Model was made using keras and tensorflow libraries.</p> <br/>
                <p className='text-right fade-out'>
                    *Images are resized to 256 x 256 resolution
                </p>
            </div>
            
            <div className='upload-box row'>
                <div className='text-center col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                    {showImage ? 
                        <div>
                            <img id="img_disp" alt="Upload-preview" className='grayscale displayImage' src={imageUrl} ref={imageRef}/>
                            <h4 className={props.isDarkMode ? 'dark' : ''}>Input Image</h4>
                        </div>
                         : 
                        <div className={props.isDarkMode ? 'upload-placeholder upload-placeholder-dark dark' : 'upload-placeholder'}> 
                            <FaUpload className='upload-icon' />
                        </div>
                    }
                </div>
                <div className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2'>
                    <i> <FaArrowRight className={props.isDarkMode ? 'upload-arrow dark' : 'upload-arrow' }/> </i>
                    <i> <FaArrowDown className={props.isDarkMode ? 'upload-arrow-mobile dark' : 'upload-arrow-mobile'}/> </i>
                </div>
                <div className='text-center col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                    {predicted ?
                        <div>
                            <img alt="Upload-preview" className='displayImage' src={outputImageUrl} />
                            <h4 className={props.isDarkMode ? 'dark' : ''}>Output Image </h4>
                        </div> :
                        <div className={props.isDarkMode ? 'upload-placeholder upload-placeholder-dark dark' : 'upload-placeholder'}> 
                            <FaQuestion id='output-icon' className='upload-icon' />
                            <ImSpinner2 icon='spinner' id='processing-icon' className='upload-icon spinner' style={{display:'none'}}/>
                        </div>
                    }
                </div>
            </div>
            
            {/* The file upload option is invisible due to the styling specified in css */}
            {/* capture='camera' --> opens camera on mobile devices */}
            <input style={{ display: 'none' }} id="inputImage" className='input-dog' type='file' accept="image/*, capture=camera" onChange={handleUpload} ref={inputRef} />
            <div className='row text-center'>
                <div className='col-12'>
                <button className={props.isDarkMode ? 'btn-upload btn-upload-dark' : 'btn-upload'} id='upload-btn' onClick={buttonProps[state].action}>
                    {buttonProps[state].text}
                </button>
                </div>
                
            </div>
            
            { saveBtn &&
                <div className='row text-center'>
                    <div className='col-12'>
                        <button className={props.isDarkMode ? 'btn-save btn-save-dark' : 'btn-save'} id='save-btn' onClick={handleSave}>
                            Download Output
                        </button>
                    </div>
                </div>
            }

            {submitFail && <p className='submit-fail text-center'> Couldn't upload image. Please try again later. </p>}
            
        </div>
    )
}

export default Input;