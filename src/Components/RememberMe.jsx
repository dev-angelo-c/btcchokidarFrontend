import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default () => {
  const [ consent, setConsent ] = useState(true);
  
  try{

    if(!consent){
      return;
    }else{
      console.log(" mounted Remember Me");
      const cookieValue = localStorage.getItem(`btcchokidar`);
      console.log(" FOUND COOKIE 2", cookieValue);
      if(!cookieValue){
        console.log("hello there", uuidv4() );
        let buildNewGuid = uuidv4()
        localStorage.setItem(`btcchokidar`, buildNewGuid);
      }
    }

    return null;
    
  }catch(e){
    console.error(" Error Rendering Remember Me...", e);
    return null;
  }
  
}