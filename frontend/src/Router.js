import { Route , createBrowserRouter ,createRoutesFromElements , RouterProvider  } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from './Pages/Home/Home'
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
import Product from "../src/Pages/SingleProduct/Product";
import Cart from "./Pages/Cart/Cart";
import CheckOut from "./Pages/CheckOut/CheckOut";
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<MainLayout/>}>
           <Route path="/" element={<Home/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Shop' element={<Shop/>}/>
           <Route path='/Contact' element={<Contact/>}/>
           <Route path='/Product' element={<Product/>}/>
           <Route path="/Cart" element={<Cart/>}/>
           <Route path="/CheckOut" element={<CheckOut/>}/>
        </Route>
        </>
    )
)
const Router = ()=>{
    return (
        <>
        <RouterProvider router={router}/>
        </>
    )
}
export default Router