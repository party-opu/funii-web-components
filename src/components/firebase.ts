import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'
// import 'firebase/storage'

if (!firebase.apps.length) {
  firebase.initializeApp({
    appId: process.env.FIREBASE_APP_ID,
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  })

  // if (typeof window !== 'undefined' && process.env.MEASUREMENT_ID) {
  //   firebase.analytics()
  // }
}

const app = firebase.app()

// export const auth = firebase.auth()

// export const storage = app.storage()

// export const firestore = app.firestore()

export const functions = app.functions()

// export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

// export const GoogleAuthProvider = firebase.auth.GoogleAuthProvider

export default firebase
