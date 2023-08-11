import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../MyHome/Index.jsx'
import MyAccount from '../MyAccount/Index.jsx'
import MyOrder from '../MyOrder/Index.jsx'
import MyOrders from '../MyOrders/Index.jsx'
import NotFound from '../NotFound/Index.jsx'
import SignIn from '../SignIn/Index.jsx'
import Navbar from '../../Components/Navbar/index.jsx'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/my-account', element: <MyAccount/>},
    { path: '/my-order', element: <MyOrder/>},
    { path: '/my-orders', element: <MyOrders/>},
    { path: '/*', element: <NotFound/>},
    { path: '/sign-in', element: <SignIn/>}
  ])

  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
