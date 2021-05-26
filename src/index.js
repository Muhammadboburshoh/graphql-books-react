import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

const client = new ApolloClient ({
  uri:'http://localhost:6060/',
  cache: new InMemoryCache(),
})


const htmlElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client = {client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  htmlElement
)