import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import App from './App'
import './index.css'

firebase.initializeApp({
  apiKey: 'AIzaSyCPtxFZfH2aQ8RUdKMYmbzL91-d-0pORTA',
  authDomain: 'pseudogram-13b51.firebaseapp.com',
  databaseURL: 'https://pseudogram-13b51.firebaseio.com',
  storageBucket: 'pseudogram-13b51.appspot.com',
  messagingSenderId: '447178987908'
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
