import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAjREZKK6jrKHosyN8I0bRw3lHdkj-oYl8",
  authDomain: "new-project-82c3f.firebaseapp.com",
  projectId: "new-project-82c3f",
  storageBucket: "new-project-82c3f.appspot.com",
  messagingSenderId: "475643751385",
  appId: "1:475643751385:web:f9bd5e2eb86e1c54cd07c8",
  measurementId: "G-F9JE1H4G7H"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}