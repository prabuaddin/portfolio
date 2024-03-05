import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/index.jsx'
import AboutPage from './pages/about/index.jsx'
import GalleryPage from './pages/gallery/index.jsx'

const routerComponent = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about', 
        element: <AboutPage />
      },
      {
        path: '/gallery', 
        element: <GalleryPage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerComponent} />
  </React.StrictMode>,
)
