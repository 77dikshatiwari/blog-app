import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './reduxStore/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Login, Protected} from './components/index.js'
import Signup from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import Post from './pages/Post.jsx'
// import Protected from './components/index.js'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App/>, 
  children: [
    {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: (<Protected  authentication={false}>
      <Login />
    </Protected>),
  },
  {
    path: '/signup',
    element: (<Protected  authentication={false}>
      <Signup />
    </Protected>),
  },
  {
    path: '/all-posts',
    element: (<Protected  authentication>
      <AllPosts />
    </Protected>),
  },
  {
    path: '/edit-post/:slug',
    element: (<Protected  authentication>
      <EditPost />
    </Protected>),
  },
  {
    path: '/add-post',
    element: (<Protected  authentication>
      <AddPost />
    </Protected>),
  },
  {
    path: '/post/:slug',
    element: <Post />
  },
]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
    {/* <App /> */}
    </Provider>
  </React.StrictMode>,
)
