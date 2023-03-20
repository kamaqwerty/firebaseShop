import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {IFireConfig} from "../types/types"

const firebaseConfig: IFireConfig = {
  apiKey: "AIzaSyDnWhUXYKowz58UNU3wHrs0QwcFZNm3ZM8",
  authDomain: "fire-shop-86a2b.firebaseapp.com",
  projectId: "fire-shop-86a2b",
  storageBucket: "fire-shop-86a2b.appspot.com",
  messagingSenderId: "241995951182",
  appId: "1:241995951182:web:42b2906f78a74133cde71f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const joinWithGoogle = new GoogleAuthProvider();

export {
  auth, 
  joinWithGoogle
}