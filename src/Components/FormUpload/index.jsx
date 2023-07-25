import React, { useState } from 'react';
import FlexColumn from "../ColumnDataContainer";
import Text from "../Text";
import Image from "../Image";
import Button from "../Button";

export default () => {
  const [file, setFile] = useState();
  const [text, setText] = useState();
  const [filePath, setFilePath] = useState();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('ocrimg', file);

    fetch('/ocr', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      const fileAndText = Object.entries(data)[0];
      console.log("F AND T ", fileAndText);
      setText(fileAndText[1])
      setFilePath(fileAndText[0])
    })
    .catch((error) => {
      setText("failure")
      console.error('Error:', error);
    });

  };


  return(
    <FlexColumn>
      <div className='actionWatch'>
        <Text className="meyrinRegular">OCT Text Tool</Text>
      </div>
      <FlexColumn>
        <FlexColumn style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%"
          }}
        >    
          <div className='formstyles'>    
          <form onSubmit={ submitForm } id="ocrimgForm" name="ocrimgForm" >
            <input type="file" name='ocrimg' id='ocrimg' accept="image/png, image/jpeg"  onChange={handleChange}></input>
            <Button type="submit">Submit</Button>
          </form>
          </div>
        </FlexColumn>
        <FlexColumn>
          <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
            <Image src={`./${filePath}`} />
          </div>
        </FlexColumn>
        <FlexColumn>
          <Text font={"anka-coder-condensed"}>
            {text}
          </Text>
        </FlexColumn>
      </FlexColumn>
    </FlexColumn>
  )
}
