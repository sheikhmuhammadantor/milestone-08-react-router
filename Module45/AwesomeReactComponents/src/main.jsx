import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './compontnts/About';
import Contact from './compontnts/Contact';
import Antor from './compontnts/Antor';
import UserAll from './compontnts/user/UserAll';
import Users from './compontnts/user/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    children: [
      {
        path: 'about',
        element: <About></About>,
        children: [
          {
            path: 'user',
            element: <Users></Users>,
            children: [
              {
                path: 'antor',
                element: <Antor></Antor>
              },
              {
                path: 'userall',
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                element: <UserAll></UserAll>
              }
            ]
          }
        ]
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
