import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import WorkoutLog from "./components/WorkoutLog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workout-log" element={<WorkoutLog />} />
      </Routes>
    </Router>
  );
}

export default App;

