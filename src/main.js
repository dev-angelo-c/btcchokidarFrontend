import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getFunctions, httpsCallable } from 'firebase/functions';
import { videosList } from "./videosList";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBJKklaYU772b6kHbOWQFmcpm5zw8pPI4",
  authDomain: "btcv2-9892c.firebaseapp.com",
  projectId: "btcv2-9892c",
  storageBucket: "btcv2-9892c.appspot.com",
  messagingSenderId: "926821013818",
  appId: "1:926821013818:web:8c320fdfd845978fcb9803"
};

const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Initialize Cloud Functions and get a reference to the service
const functions = getFunctions(app);

//https://firebase.google.com/docs/hosting/manage-hosting-resources

export const callAirtable = () => {
  
  console.count("CallAT ");

  const ytLinks = httpsCallable(functions, 'ytlinks');
  
  return ytLinks({ text: "" })
  .then( ({data}) => {
    return data;
  })
  .catch ( e => {
    console.error(" ERR: ", e)
  })
  
}

//make sure to pay attention to the name of the database.
//THIS IS FIRESTORE!!
export const queryFirebase = async () => {
  const results = [];

  const queryDB = async () => {
    const x = await getDocs(collection(db, 'test'))
    x.forEach( (doc) => {
      results.push(doc.data())
    });
  }
  console.count(` FIREBASE QUERY${ x.length}`)
  
  await queryDB();
  return results;
}