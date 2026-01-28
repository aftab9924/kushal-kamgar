import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Login from './features/auth/Login'
import Register from "./features/auth/Register"
import ProtectedRoute from "./features/auth/ProtectedRoute"
import RoleSelection from "./pages/RoleSelection"
import CustomerDashboard from "./pages/CustomerDashboard"

function App() {


  return (
    // <Router>
    //   <Routes>
        
    //     {/* Public Routes */}

    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/select-role" element={<RoleSelection />}/>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />}/>

    //     {/* Customer Private Routes */}

    //     <Route element={<ProtectedRoute allowedRoles={["CUSTOMER"]}/>}>
    //         <Route path="/customer/home" element={<CustomerDashboard />}/>
    //     </Route>

    //     {/* Provider Private Routes */}

    //     <Route element={<ProtectedRoute allowedRoles={["PROVIDER"]}/>}>
    //       <Route path="/provider/home" element={<ProviderDashboard />}/>
    //     </Route>


    //       {/* --- 404 PAGE --- */}
    //       <Route path="*" element={<div>Page Not Found 404</div>}/>
    //   </Routes>
    // </Router>

    //.........Testing..........
    // <Router>
    //    <Login />
    // </Router>
    <CustomerDashboard />
  )
}

export default App