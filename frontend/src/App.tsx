import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { getClient } from './client'
import { router } from './routes/browserRoutes'


const client = getClient()

function App() {

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router}/>
    </ApolloProvider>
  )
}

export default App
