import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './compontnts/ErrorPage';
import Header from './compontnts/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },{
    path: "/home",
    element: <Header></Header>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
