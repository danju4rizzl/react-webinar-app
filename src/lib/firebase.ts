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
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    userEmail,
    userPassword
  )

  return userCredential.user
}

export const login = async (userEmail: string, userPassword: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    )

    const user = userCredential.user
    return user
  } catch (error) {
    return { errors: `🔴 ${error} ` }
  }
}

export const loginWithGoogle = async () => {
  try {
    // Create a new GoogleAuthProvider instance
    const provider = new GoogleAuthProvider()
    // Call the signInWithPopup method with the provider instance
    const user = await signInWithPopup(auth, provider)

    // Get the user's Google access token.
    const credential = GoogleAuthProvider.credentialFromResult(user)

    const token = credential?.accessToken
    console.log('🟡 Firebase token is:', token)

    return user
  } catch (error) {
    // Handle the error
    console.error('Error logging in with Google Provider:', error)
    // Optionally, you can throw the error to be caught by the caller
    throw error
  }
}
