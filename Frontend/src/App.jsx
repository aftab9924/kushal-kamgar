import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Login from './features/auth/Login'
import About from "./pages/About"
import Register from "./features/auth/Register"
import ProtectedRoute from "./features/auth/ProtectedRoute"
import RoleSelection from "./pages/RoleSelection"
import CustomerDashboard from "./pages/CustomerDashboard"
import ProviderDashboard from "./pages/ProviderDashboard"
import NotFound from "./pages/NotFound"
import MainLayout from "./components/layout/MainLayout"
import {Toaster} from "react-hot-toast"

function App() {


  return (
   <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/select-role" element={<RoleSelection />} />

          {/* Wrapper for ALL Protected Content that needs a Navbar */}
          <Route element={<MainLayout />}>
            
            {/* Customer Section */}
            <Route element={<ProtectedRoute allowedRoles={["CUSTOMER"]} />}>
              <Route path="/customer/home" element={<CustomerDashboard />} />
            </Route>

            {/* Provider Section */}
            <Route element={<ProtectedRoute allowedRoles={["PROVIDER"]} />}>
              <Route path="/provider/home" element={<ProviderDashboard />} />
            </Route>
            
          </Route>

          {/* 404 - Keep this at the end */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>

    //.........Testing..........
    // <Router>
    //    <Login />
    // </Router>

  )
}

export default App