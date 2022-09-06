import React, { useState } from 'react'

export default function Textform(props) {
    let myStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(37,8,126)'
    }
    const [text, settext] = useState('')
    const handleOnChange = (event) => {
        settext(event.target.value)
    }
    const handleUppercase = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLowercase = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClear = () => {
        settext('');
        props.showAlert("Text has been cleared!", "success");
    }
    const handleRemoveextraspaces = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showAlert("Extra spaces has been removed!", "success");
    }

    const handleReverseText = () => {
        let Text = text.split("");
        let reverseText = Text.reverse().toString().replaceAll(",", "");
        settext(reverseText)
        props.showAlert("Text has been reversed!", "success");
    }

    const handleCopy = () => {
        // var text = document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRange();
        props.showAlert("Copied to clipboard!", "success");
    }
    return (
        <>
            <h2 style={myStyle}>{props.title}</h2>
            <div className="mb-3 my-3">
                <textarea className="form-control" id="mybox" style={myStyle} rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1 " disabled={text.length === 0} onClick={handleUppercase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1 " disabled={text.length === 0} onClick={handleLowercase}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1 " disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1 " disabled={text.length === 0} onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1 " disabled={text.length === 0} onClick={handleRemoveextraspaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1 " disabled={text.length === 0} onClick={handleReverseText}>Reverse of entered text</button>

            <div className="container my-3" style={myStyle}>
                <h2>Entered text summary</h2>
                <p><strong>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</strong> words and <strong>{text.length} </strong> characters</p>
                <p><strong>{0.08 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</strong> minutes are required to read the entered text..</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Nothing to preview" : text}</p>
            </div>
        </>
    )
}
