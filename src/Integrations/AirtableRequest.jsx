import React, {useEffect, useState, Suspense, useCallback} from "react";
import CardColumn from "../Components/ColumnDataContainer";
import { Card } from "../Components/Card";
import airtableYoutubeLinks from "../main";

export default () => {
  let [results, setResults] = useState([]);

  useEffect( () => {
    const fetchAirtable = async () => {
      try{
        const airtableResponse = await airtableYoutubeLinks()
        setResults(airtableResponse);
      }catch(e){
        console.error(" Error Fetching Airtable links");
      }
    }
    
    fetchAirtable();
    return () => {
      console.log(" Everything should be done now ", console.log(" results ", results));
    }
  }, [])

  return (
    <CardColumn key="HelloWorld">      
      {
        results?.records ?
        results.records
        .sort( (a, b) => a.fields.Order - b.fields.Order)
        .map( ( i, idx ) => {
          return <Card {...i.fields} key={idx} />
        })
        : <p className="watchNow">Loading...</p>
      }
    </CardColumn>
  )
}


