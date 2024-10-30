import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from './compontnts/Header';
import About from './compontnts/About';
import Contact from './compontnts/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    children: [
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App></App> */}
  </StrictMode>,
)
