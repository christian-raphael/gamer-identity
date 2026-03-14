import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import Profile from './pages/profile/Profile.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
