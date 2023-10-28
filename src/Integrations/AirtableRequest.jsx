import React, {useEffect, useState, Suspense, useCallback} from "react";
import CardColumn from "../Components/ColumnDataContainer";
import { Card } from "../Components/Card";
import { callAirtable } from "../main";
import { videosList } from "../videosList";

export default () => {
  let [results, setResults] = useState([]);

  const callAirtableAPI = useCallback( () => {
    callAirtable()
    .then( (data) => {      
      
      if(data?.records){
        setResults(data.records);
      }
      setResults(videosList);
      return;
    
    })
    .catch( e => {
      console.error( " ERR ", e);            
      return () => "error";
    })
  
  })

  useEffect( () => {
    callAirtableAPI()
  }, [callAirtableAPI])

  return (
    <CardColumn key="HelloWorld">      
      {
        results ?
        results
        .sort( (a, b) => a.fields.Order - b.fields.Order)
        .map( ( i, idx ) => {
          console.log(" I fields: ", i.fields);
          return <Card {...i.fields} key={idx} />
        })
        : <p className="watchNow">Loading...</p>
      }
    </CardColumn>
  )
}


