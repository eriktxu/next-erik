
import { initializeApp } from "firebase/app";
import {resolve} from "styled-jsx/css";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


const promise  = new Promise (
  (resolve, reject) => {
    try {
      reject("something error")
      resolve("todo ok")
    } catch {
      reject("algo mal")
    }
  }
)

promise.then(
  (result) => {
    console.log(result)
  }
)
.catch(
  (error) => {
    console.log(error)
  }
)

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
function login(email, password){
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}