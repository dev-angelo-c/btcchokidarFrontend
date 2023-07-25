import React, {useEffect, useState, Suspense} from "react";
import { Card } from "../Components/Card";
import { callAirtable } from "../main";
const jack = "hi There. ";

const Loading = () => {
  <div>
    <p> Welcome </p>
    <p> I am loading. Please give me a moment</p>
    <p> My developer is forever a rookie :) </p>
    <p> Enjoy your journey through the modern world of bitcoin conversation</p>
    <p> It's likely nothing here is far removed from most ancient teachings</p>
    <p> We use a little anonymous "cookie", which will easily be blocked by the Brave Browser </p>
    <p> If you do not agree, you may close our site now. :)</p>
  </div>
}

export default () => {
  let [results, setResults] = useState([]);

  useEffect( () => {
    callAirtable()
    .then( ({records}) => {
      records ? setResults(records) : [];
    })
    .catch( e => {
      console.error( " ERR ", e);
    })    
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <div className={"cardContainer"}>      
        {
          results
          //gather custom sort order
          .sort( (a, b) => a.fields.Order - b.fields.Order)
          .map( ( i ) => {
            return <Card {...i?.fields} key={i?.id} />
          })
        }
      </div> 
    </Suspense>
  )
}

