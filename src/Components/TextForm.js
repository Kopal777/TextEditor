import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCapitalizedClick = () => {
        let newText = "";
        const array = text.split(" ");
        for (let i = 0; i < array.length; i++) {
            newText = newText + array[i].charAt(0).toUpperCase() + array[i].slice(1)+" ";
            if (newText.length >= text
                .length) {
                    newText = newText.trim();
                    break;
                
                }  
        }
        setText(newText);
    }

    const handleInverseClick = () => {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText = newText + text.charAt(i).toUpperCase();
                i++;
            }
            newText = newText + text.charAt(i);
        }
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const [text, setText] = useState('');
    return (
        <div>
            <div className="container" >
                <div className="mb-3 my-3">
                    <h2>Enter text here</h2>
                    <textarea className="form-control" style={{ background: props.mode === 'light' ? 'white' : '#171e36', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Enter text' id="box" value={text} rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UpperCase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>LowerCase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizedClick}>Capitalized case</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleInverseClick}>InverseCase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                <div className="my-3">
                    <h3>Text Summary</h3>
                    <p>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                </div>
            </div>
        </div>
    )
}
