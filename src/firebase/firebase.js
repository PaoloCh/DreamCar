import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9QVWG6Mjj25Qsz3Act0gikqAZWgFg01I",
  authDomain: "dreamcardb-vue.firebaseapp.com",
  projectId: "dreamcardb-vue",
  storageBucket: "dreamcardb-vue.appspot.com",
  messagingSenderId: "831292902723",
  appId: "1:831292902723:web:351d54ee115ca7c2a873f6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
