import React, { useState, useRef, Suspense } from 'react';
import FlexColumn from "../ColumnDataContainer";

const onError = () => {
  return (
    <p> Some Error </p>
  )
}

const onSuccess = () => {
  return (
    <p> Some Success </p>
  )
}

const onUploadProgress = () => {
  return (
    <p> Progress Started</p>
  )
}

const onUploadStart = () => {
  return (
    <p>Upload Started </p>
  )
}

export const FormUpload = () => {

  const [file, setFile] = useState();
  const [text, setText] = useState();
  const [filePath, setFilePath] = useState();
  const [discoveredText, setDiscoveredText] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submit = (e) => {
    e.preventDefault();
    const uploadForm = document.getElementById('uploadForm');
    const devURL = "http://127.0.0.1:5001/btcv2-9892c/us-central1/ocr";
    const URL = "https://us-central1-btcv2-9892c.cloudfunctions.net/ocr";
    const formData = new FormData(uploadForm);

    fetch(devURL, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json()) // Assuming the response will be JSON
    .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., show a message, redirect, etc.)
        const tempText = Object.values(data);
        const tempFileName = Object.entries(data);
        console.log(" eventPhase: ", e.eventPhase)
        setDiscoveredText(tempText[0])
        setFilePath(tempFileName[0])
        
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
    });
  }

  //In order to use the SDK, you need to provide it with a few configuration parameters. 
  //The configuration parameters can be applied directly to the IKImage component or using 
  //an IKContext component.

  return (
    <FlexColumn>            
      <h2>File upload</h2>    
      <div>  
        <p>Hi there! Here you can upload a file that contains some text. In a few moments the app will return the text to you so you can copy it</p>
        <p>We do not retain copies of anything you do here. A cloud function runs, processes the image text and the function stops. There are no database connections</p>
        <p>If you would like us to add that feature, let us know by clicking <a href="/dbrequested">here</a> </p>
      </div>
      <div>
        <form method="post" encType="multipart/form-data" id="uploadForm">
          <input onChange={handleChange} filename={text} type='file' id="avatar" name="avatar" accept="image/png, image/jpeg" />
          <input type="submit" value="Upload Image" name="submit" onClick={submit}/>        
        </form>
      </div>
      <div className='response'> 
        <div className="image">
          <img src={file} />
        </div>
        <div className="text-from-image">
          <p>{discoveredText}</p>
        </div>
      </div>
    </FlexColumn>
  )
  }
