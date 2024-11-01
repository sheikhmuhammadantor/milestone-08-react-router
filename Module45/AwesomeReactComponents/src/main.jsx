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
import UserDetails from './compontnts/user/UserDetails';
import Posts from './compontnts/post/Posts';
import PostsParents from './compontnts/post/PostsParents';
import PostDetails from './compontnts/post/PostDetails';
import ErrorPage from './compontnts/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>,
        children: [
          {
            path: 'users',
            element: <Users></Users>,
            children: [
              {
                path: 'antor',
                element: <Antor></Antor>
              },
              {
                path: 'userall',
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                element: <UserAll></UserAll>,
              },
              {
                path: 'userall/:userId',
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
                element: <UserDetails></UserDetails>
              },
            ]
          },
        ]
      },
      {
        path: '/postparents',
        element: <PostsParents></PostsParents>,
        children: [
          {
            path: 'post',
            loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
            element: <Posts></Posts>,
          },
          {
            path: 'post/:postId',
            loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
            element: <PostDetails></PostDetails>,
          },
        ]
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
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
