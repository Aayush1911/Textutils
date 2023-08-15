import React, { useState } from "react";
//props
export default function Textform(props) {
  const handleupperclick = () => {
    // console.log("uppercase click"+text)
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Converted to Uppercase","success")
  };

  const handlelowerclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Converted to Lowercase","success")
  };

  const handlepascalcase=()=>{
    let words = text.split(" ");
  let newText = words
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");

  settext(newText);
  props.showalert("Converted to Pascalcase","success")
  }

  const handlecamelcase=()=>{
    let words = text.split(" ");
  let newText = words
    .map((word, index) => {
      return index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");

  settext(newText);
  props.showalert("Converted to Camelcase","success")
  }

  const handleclearclick = () => {
    let newtext = ''
    settext(newtext);
    props.showalert("Text cleared","success")
  };

  const onchangehandle = (event) => {
    // console.log("onchange")
    settext(event.target.value);
  };

const handleextraspace=()=>{
  let newtext=text.split(/[ ]+/)
  settext(newtext.join(" "))
  props.showalert("Extra space removed","success")
}

  const handlecopyclick=()=>{
    var text=document.getElementById('mybox')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showalert("Text copied to Clipboard","success")
  }
  //state
  const [text, settext] = useState("");

  return (
    <>
      <div className="container my-2" style={{color :props.mode === "dark"?"white":"black",width:'85vw'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea className="form-control" value={text} id="mybox" onChange={onchangehandle} rows="8"
          style={{backgroundColor :props.mode === "dark"?"#13466e":"white",color: props.mode === "dark"?"white":"black",height:'25vh'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleupperclick}>
          Convert Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelowerclick}>
          Convert Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlepascalcase}>
          Convert Pascal Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecamelcase}>
          Convert Camel Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleextraspace}>
          Remove Extra Space
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1 " onClick={handlecopyclick}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1 " onClick={handleclearclick}>
          Clear Text
        </button>
      </div>
      <div className="container my-4" style={{color :props.mode === "dark"?"white":"black",width:'85vw'}}>
        <h3>Summary of your Text</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words <br />{text.length} Characters <br />
        {0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
        <h3 className="preview">Preview</h3>
        <div className="previewsection" style={{border :'1px solid black',borderRadius:'10px', height:'25vh',padding:'2px',
        backgroundColor :props.mode === "dark"?"#13466e":"white",color: props.mode === "dark"?"white":"black"}}>
        <p>{text.length>0?text:"Nothing to Preview!!"}</p>
        </div>
      </div>
    </>
  );
}
