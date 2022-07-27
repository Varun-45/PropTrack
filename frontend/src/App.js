import { useEffect, Suspense, lazy } from "react";
import {Route,Routes} from 'react-router-dom'
import {Redirect} from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { loaduseraction } from "./Actions/useraction";
import './App.css'
import './Swiper.css'
import './reset.scss'

const Protected = lazy(()=> import("./Protected"))
const Home = lazy(()=> import("./Components/Home/Home"))
const Error404 = lazy(()=> import("./Components/Layout/404/Error404"))
const About = lazy(()=> import("./Components/Layout/About/About"))
const Contact = lazy(()=> import("./Components/Layout/Contact/Contact"))
const Footer = lazy(()=> import("./Components/Layout/Footer/Footer"))
const Header = lazy(()=> import("./Components/Layout/Header/Header"))
const Login = lazy(()=> import("./Components/User/Login_Register"))
const NewProperty = lazy(()=> import("./Components/Property/New/NewProperty"))
const Basic = lazy(()=> import("./Components/Property/New/Basic"))
const Address = lazy(()=> import("./Components/Property/New/Address"))
const Photo = lazy(()=> import("./Components/Property/New/Photo"))
const PropertyDetails = lazy(()=> import("./Components/Property/Property_Details/PropertyDetails"))
const Owner_Properties = lazy(()=> import("./Components/Property/Owner_Properties/Owner_Properties"))
const Profile = lazy(()=> import("./Components/User/Profile"))
const UpdateProfile = lazy(()=> import("./Components/User/UpdateProfile"))
const UpdatePassword = lazy(()=> import("./Components/User/UpdatePassword"))
const ResetPassword = lazy(()=> import("./Components/User/ResetPassword"))
const ForgotPassword = lazy(()=> import("./Components/User/ForgotPassword"))
const Dashboard = lazy(()=> import("./Components/Admin/Dashboard"))
const Temp = lazy(()=> import("./Components/User/Temp"))

const App = () => {
  const dispatch = useDispatch()
  const {isAuthenticated, user} = useSelector(state=>state.User)

  useEffect(() => {
    dispatch(loaduseraction())
  }, [dispatch])
  

  return (
    <>
    <Suspense fallback={<div></div>}><Header/></Suspense>

      {/* {isAuthenticated && <UserOptions user={user} />}
      {!isAuthenticated && show && <UserOptions2/>} */}

        <Routes>
          <Route exact path="/temp" element={<Suspense fallback={<div></div>}><Temp/></Suspense>}/>

          <Route exact path="/" element={<Suspense fallback={<div></div>}><Home/></Suspense>}/>
          <Route exact path="/about" element={<Suspense fallback={<div></div>}><About/></Suspense>} />
          <Route exact path="/contact" element={<Suspense fallback={<div></div>}><Contact/></Suspense>} />

          
          <Route exact path="/property/new" element={<Suspense fallback={<div></div>}><NewProperty/></Suspense>}>
            <Route exact path='basic' element={<Suspense fallback={<div></div>}><Basic/></Suspense>}/>
            <Route exact path='address' element={<Suspense fallback={<div></div>}><Address/></Suspense>}/>
            <Route exact path='photo' element={<Suspense fallback={<div></div>}><Photo/></Suspense>}/>
          </Route>
          <Route exact path="/owner-properties" element={<Suspense fallback={<div></div>}><Owner_Properties/></Suspense>} />
          <Route exact path="/property/:productid" element={<Suspense fallback={<div></div>}><PropertyDetails/></Suspense>} />

          <Route exact path="/login" element={<Suspense fallback={<div></div>}><Login/></Suspense>} />
          <Route exact path="/profile" element={<Protected element={<Suspense fallback={<div></div>}><Profile/></Suspense>} />} />
          <Route exact path="/me/update" element={<Protected element={<Suspense fallback={<div></div>}><UpdateProfile/></Suspense>} />} />
          <Route exact path="/password/update" element={<Protected element={<Suspense fallback={<div></div>}><UpdatePassword/></Suspense>} />} />
          <Route exact path="/reset/:token" element={<Suspense fallback={<div></div>}><ResetPassword/></Suspense>} />
          {!isAuthenticated && <Route exact path="/password/forgot" element={<Suspense fallback={<div></div>}><ForgotPassword/></Suspense>} /> }
          

        {/* ADMIN */}
          <Route exact path="/admin/dashboard" element={<Protected isAdmin={true} element={<Suspense fallback={<div></div>}><Dashboard/></Suspense>} />} />

          {/* <ProtectedRoute isAdmin={true} exact path='/admin/products' element={<ProductList/>} />
          <ProtectedRoute isAdmin={true} exact path='/admin/product/:id' element={<UpdateProduct/>} /> */}

          {/* <ProtectedRoute isAdmin={true} exact path='/admin/users' element={<UsersList/>} /> */}
          {/* <ProtectedRoute isAdmin={true} exact path='/admin/user/:id' element={<UpdateUser/>} /> */}

          {/* <ProtectedRoute isAdmin={true} exact path='/admin/reviews' element={<ProductReviews/>} /> */}

          <Route exact path="*" element={<Suspense fallback={<div></div>}><Error404/></Suspense>} />
        </Routes>
      {/* <Suspense fallback={<div></div>}><Footer/></Suspense> */}
      </>
  )
}

export default App