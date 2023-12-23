import React, {useEffect, useState, Suspense, useCallback} from "react";
import CardColumn from "../Components/ColumnDataContainer";
import { Card } from "../Components/Card";
import airtableYoutubeLinks from "../main";

export default () => {
  let [results, setResults] = useState([]);
  let [beginFetch, setBeginFetch] = useState(0)

  useEffect( () => {
    setBeginFetch(beginFetch++);
    if(beginFetch < 1){
      const fetchAirtable = async () => {
        try{
          const airtableResponse = await airtableYoutubeLinks()
          console.log(" Do you do this? ", airtableResponse?.data?.records.length);
          setResults(airtableResponse?.data);
        }catch(e){
          console.error(" Error Fetching Airtable links");
        }
      }
      
      fetchAirtable();
    }
    return () => {
      setBeginFetch(0);
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


