// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export const database = getDatabase(firebaseApp)

export const auth = getAuth(firebaseApp)

export const signUp = async (
  userEmail: string,
  userPassword: string
): Promise<User | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    )

    return userCredential.user
  } catch (error) {
    return null
  }
}

export const login = async (userEmail: string, userPassword: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    )

    return userCredential.user
  } catch (error) {
    return null
  }
}

export const loginWithGoogle = async () => {
  try {
    // Create a new GoogleAuthProvider instance
    const provider = new GoogleAuthProvider()
    // Call the signInWithPopup method with the provider instance
    const userCredential = await signInWithPopup(auth, provider)

    // Get the user's Google access token for use on a custom backend
    // const credential = GoogleAuthProvider.credentialFromResult(userCredential)
    // const token = credential?.accessToken
    // console.log('🟡 Firebase token is:', token)

    // redirect the user to /app
    return userCredential.user
  } catch (error) {
    // Handle the error
    console.error('Error logging in with Google Provider:', error)
    return null
  }
}

export const getUser = () => {
  return new Promise<User | null>((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe() // Unsubscribe after getting the user once
      resolve(user)
    })
  })
}

export const logoutUser = () => {
  auth.signOut()
  return null
}
