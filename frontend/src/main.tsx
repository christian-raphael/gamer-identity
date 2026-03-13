import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './App.tsx'
import Profile from './pages/profile/Profile.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/profile",
    element: <Profile/>
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
