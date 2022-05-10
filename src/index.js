import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection,
    addDoc, serverTimestamp,
} from 'firebase/firestore'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import App from './App'

initializeApp({
    apiKey: 'AIzaSyAnH-z-hqwxdB8ggb3Hni8NsXn6savHD8E',
    authDomain: 'react-chat-a618b.firebaseapp.com',
    projectId: 'react-chat-a618b',
    storageBucket: 'react-chat-a618b.appspot.com',
    messagingSenderId: '1051983916222',
    appId: '1:1051983916222:web:8cc513afff0de7200d82ef',
    measurementId: 'G-QTDWFT71G6'
})

export const Context = createContext(null)

const auth = getAuth()
const firestore = getFirestore()
const colRef = collection(firestore, 'messages')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{
        auth,
        colRef,
        firestore,
        addDoc,
        serverTimestamp,
        GoogleAuthProvider,
        signInWithPopup
    }}>
        <App />
    </Context.Provider>
)

