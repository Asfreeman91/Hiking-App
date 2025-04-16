import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Root from './Components/Root/Root'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Outlet/>,
    children: [
        {
    path: "/",
    element: <Root/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
    ]
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

