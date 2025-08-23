import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import SignupPage from "./components/SignupPage"
import Dashboard from "./components/Dashboard"
import WorkoutLog from "./components/WorkoutLog"
import WorkoutHistory from "./components/WorkoutHistory"
import ProgressChart from "./components/ProgressChart"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Signup" element={<SignupPage />}/>
        <Route path="/Login" element={<LoginPage />}/>
        {/* <Route path="/dashboard" element={<Dashboard />}/> */}
      </Routes>
    </Router>
  )
}

export default App
