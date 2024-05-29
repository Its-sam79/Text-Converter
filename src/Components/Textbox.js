import React, { useState } from 'react';
import mode from './Navbar.js';
import textmode from './Navbar.js';
import Alert from './Alert.js';

export default function Textbox(props) {

    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText)
      props.showAlert("Converted to Upper Case","success");

      
    }
    const handleDownClick = () => {
        let lowText = Text.toLowerCase();
        setText(lowText)
        // alert("Text convert in Lowercase")
    }
    const handleClick = () => {
        let sentenceText = Text;
        document.execCommand('copy');
        setText(sentenceText)
    //     alert("Text are copyed")
    }
    const clickHandleClick = () => {
        // let clearText = (Text);
        setText('');
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [Text, setText] = useState("Enter text here");
    // setText("New Text");                                                                                                                                
    return (
        <>
            <div className={`container bg-${mode} text-${textmode}`}>
                <div className={`mb-3  bg-${mode} text-${textmode}`}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className={` bg-${mode} text-${textmode}`}>
                    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Conver to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleDownClick}>conver to Lowercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleClick}> Copy to clipbord</button>
                    <button className='btn btn-primary mx-2' onClick={clickHandleClick}>clear Text</button>
                    <div className={` my-2 bg-${mode} text-${textmode}`}>
                        <h1>Word Count</h1>
                        <p>{Text.split(" ").length} word and {Text.length} character</p>
                        <h3>Preview</h3>
                        {Text}
                    </div>
                </div>
            </div>
        </>
    )
}
