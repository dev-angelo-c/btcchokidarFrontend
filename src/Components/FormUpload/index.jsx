import React, { useState } from 'react';
import FlexColumn from "../ColumnDataContainer";
import Text from "../Text";

export default () => {
  const [file, setFile] = useState();
  const [text, setText] = useState();

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
      console.log('Success:', data.length);
      setText(data)
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
        <FlexColumn>        
          <form onSubmit={ submitForm } id="ocrimgForm" name="ocrimgForm" >
            <input type="file" name='ocrimg' id='ocrimg' accept="image/png, image/jpeg"  onChange={handleChange}></input>
            <button type="submit">Submit</button>
          </form>
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
