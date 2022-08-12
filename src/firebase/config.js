import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB_ogM5-j-3DP5kmdr4RiTmqOd9sJfpKRQ',
  authDomain: 'miniblog-97837.firebaseapp.com',
  projectId: 'miniblog-97837',
  storageBucket: 'miniblog-97837.appspot.com',
  messagingSenderId: '121763903852',
  appId: '1:121763903852:web:e7440db3f4064908a75b49',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
