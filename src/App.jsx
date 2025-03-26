
import './App.css'
import API from './components/API/API.Jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import AboutUs from './components/AboutUs/AboutUs'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import ContactUs from './components/ContactUs/ContactUs'


let routes = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true, element:<Home/>},
    {path:"News" , element:<API/>},
    {path:"About" , element:<AboutUs/>},
    {path:"contact" , element:<ContactUs/>},
    {path:"login" , element:<Login/>},
    {path:"register" , element:<Register/>},
    {path:'*' , element:<NotFound/>}
  ]}
])

function App() {
  return (
    <>
     <RouterProvider router = {routes}>

     </RouterProvider>
    </>
  )
}

export default App
