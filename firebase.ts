import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBvk2APMb2fjt5cKwNimCazyJvtExhUeAc",
  authDomain: "chatgpt-7.firebaseapp.com",
  projectId: "chatgpt-7",
  storageBucket: "chatgpt-7.appspot.com",
  messagingSenderId: "572420226741",
  appId: "1:572420226741:web:c7ef3c5196200c2641c8fc",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
