import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import App from './App.jsx'

const client = new ApolloClient ({
  uri:'http://localhost:5050/',
  cache: new InMemoryCache(),
})


const htmlElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client = {client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  htmlElement
)