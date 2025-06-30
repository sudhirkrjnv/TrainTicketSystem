import './App.css';
import { Button } from "@/components/ui/button"
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import MainLayout from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

const browserRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/register",
    element:<Register/>,
  },
  
])

function App() {
  return (
    <>
      <RouterProvider router={browserRouter}/>
    </>
  )
}

export default App;