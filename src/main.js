import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from 'firebase/functions';
import firebaseConfig from "./firebaseConfig";
const app = initializeApp(firebaseConfig) //https://firebase.google.com/docs/hosting/manage-hosting-resources
const functions = getFunctions(app); //Initialize Cloud Functions and get a reference to the service

export default async () => {
  
  try {
    
    const ytLinks = httpsCallable(functions, 'ytlinks');
    const data = await ytLinks();
    return data; // Access the data field
  
  } catch (error) {  
  
    console.error(" ERR: ", error);
    throw error;  
  
  }

};
