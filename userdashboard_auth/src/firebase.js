// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyDdTeA7UMLQbcI1HgvF8EaC89De3VL2aCA",
//     authDomain: "jay-userdashboard-kc4.firebaseapp.com",
//     projectId: "jay-userdashboard-kc4",
//     storageBucket: "jay-userdashboard-kc4.appspot.com",
//     messagingSenderId: "695444809187",
//     appId: "1:695444809187:web:1fc52987ca1bf611eeecd6",
//     measurementId: "G-8QMXGF1V6Z"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdTeA7UMLQbcI1HgvF8EaC89De3VL2aCA",
    authDomain: "jay-userdashboard-kc4.firebaseapp.com",
    projectId: "jay-userdashboard-kc4",
    storageBucket: "jay-userdashboard-kc4.appspot.com",
    messagingSenderId: "695444809187",
    appId: "1:695444809187:web:1fc52987ca1bf611eeecd6",
    measurementId: "G-8QMXGF1V6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);