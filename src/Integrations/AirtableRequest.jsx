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
    console.count("What is the effect of this useEffect ");
    callAirtableAPI()
  }, [callAirtableAPI])

  return (
    <CardColumn>      
      {
        results
        .sort( (a, b) => a.fields.Order - b.fields.Order)
        .map( ( i ) => {
          return <Card {...i?.fields} key={i?.id} />
        })
      }
    </CardColumn>
  )
}


