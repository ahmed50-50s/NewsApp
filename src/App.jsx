
import './App.css'
import API from './components/API/API.JSX'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import AboutUs from './components/AboutUs/AboutUs'
import Slider from './components/NewsSlider/Slider'
import Login from './components/Login/Login'
import Register from './components/Register/Register'


let routes = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true, element:<Home/>},
    {path:"News" , element:<API/>},
    {path:"About" , element:<AboutUs/>},
    {path:"slide" , element:<Slider/>},
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
