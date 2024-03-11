// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)

export const auth = getAuth(app)

export const signupNewUser = async (
  userEmail: string,
  userPassword: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    )

    const user = userCredential.user
    return user
  } catch (error) {
    return null
  }
}

/*
Required to receive emails in Zoho


At Farm2Table.com.ng, we aim to transform the food industry in Nigeria by connecting local farmers with consumers. 
Our mission is to empower farmers, promote agricultural diversity, and provide households with easy access to fresh, locally sourced ingredients.


Our vision at Farm2Table.com.ng is to create a sustainable agricultural ecosystem in Nigeria where farmers succeed, consumers have access to fresh and healthy food, and households enjoy cooking with locally sourced ingredients. We aim to drive positive change in the food supply chain, supporting economic growth, community well-being, and environmental sustainability nationwide.




Introducing Farm2Table.com.ng – get fresh, local ingredients delivered to you! Say goodbye to grocery store hassle with our subscription service. Enjoy nutritious meals, support local farmers, and choose sustainable agriculture. Upgrade your cooking with Farm2Table.com.ng today.

Top 3 Offers:

1. Fresh, Local Ingredients: Wide selection of farm-fresh produce, meats, and dairy products sourced from local farmers.


2. Empowerment for Women Farmers: Specialized training programs and financial support to empower women in agriculture.


3. Convenient Subscription Plans: Flexible meal planning with fresh ingredients delivered to your doorstep.

Business Focus:
Farm2Table.com.ng focuses on connecting local farmers with consumers to promote sustainability and convenience in the food supply chain. They champion local ingredients, empower women farmers, and offer convenient subscription plans to improve access to fresh, nutritious food in Nigeria.

*/
