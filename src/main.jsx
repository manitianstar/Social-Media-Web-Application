import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './routes/App.jsx'
import CreatePost from './components/CreatePost.jsx'
import { PostList } from './store/post-list-store.jsx'

const router=createBrowserRouter([
  {path: "/", element: <App></App>, children: [{path:"/", element: <PostList></PostList>}, {path: "/CreatePost", element: <CreatePost></CreatePost>}]},
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
