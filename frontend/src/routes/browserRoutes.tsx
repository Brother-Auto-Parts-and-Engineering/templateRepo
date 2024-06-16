import { TestComponent } from '@src/TestComponent'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TestComponent/>
  }
])