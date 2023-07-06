import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAMcW1ayL5jIP9jC0Oy9lGYWI5oBcQm68M",
    authDomain: "expenses-405a5.firebaseapp.com",
    projectId: "expenses-405a5",
    storageBucket: "expenses-405a5.appspot.com",
    messagingSenderId: "216912822312",
    appId: "1:216912822312:web:73a94e7e0cf0e7366e751d",
    measurementId: "G-YCK8BL49T1",
    databaseURL: "https://expenses-405a5-default-rtdb.firebaseio.com",
  };

  export const app =initializeApp(firebaseConfig);