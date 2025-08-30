import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WorkoutLog from "./WorkoutLog";
import WorkoutHistory from "./WorkoutHistory";
import ProgressChart from "./ProgressChart";
import { fetchExercisesWithInfo } from "../services/wgerApi";

function Dashboard() {
  const fullname = localStorage.getItem("fullname");
  const profilePic = localStorage.getItem("profilePic");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [workoutHistory, setWorkoutHistory] = useState([]);

  const navigate = useNavigate(); 

  // Load recent exercises (WorkoutLog)
  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchExercisesWithInfo();
        const list = Array.isArray(data) ? data : data?.results || [];
        setExercises(list);
      } catch (e) {
        console.error("Failed to load exercises for dashboard:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // logout handler
  const handleLogout = () => {
    localStorage.clear(); // remove all user data
    navigate("/"); // redirect to HomePage
  };
  // Load Workout History from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("completedWorkouts")) || [];
    setWorkoutHistory(saved);
  }, []);

  return (
    <div className="p-[20px]">
      {/* User Info */}
      <div className="mb-[20px] flex justify-between items-center">
        <div>
          <h1 className="text-[24px] mb-[10px] font-bold">
            Welcome, {fullname || "User"}!
          </h1>
          {profilePic && (
            <img
              src={profilePic}
              alt="Profile"
              className="w-[100px] h-[100px] rounded-[50%] border-[2px] border-white border-solid"
            />
          )}
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Recent Workouts */}
      <h2 className="mb-[10px] font-semibold">Here’s a quick view of your recent workouts:</h2>
      {loading ? (
        <p className="text-gray-500">Loading exercises…</p>
      ) : (
        <WorkoutLog isDashboardView={true} exercises={exercises.slice(0, 2)} />
      )}

      {/* Navigate to full log */}
      <div className="mt-[10px]">
        <Link to="/workout-log" className="text-blue-600 underline">
          View Full Workout Log
        </Link>
      </div>

      {/* Recent Workout History */}
      <div className="mt-[30px]">
        <h2 className="mb-[10px] font-semibold">Recent Workout History:</h2>
        {workoutHistory.length === 0 ? (
          <p className="text-gray-500">No completed workouts yet.</p>
        ) : (
          <ul className="space-y-3">
            {workoutHistory.slice(-2).reverse().map((workout, index) => (
              <li key={index} className="p-3 border rounded-lg shadow-sm bg-gray-50">
                <strong className="block text-lg">{workout.name}</strong>
                <em className="block text-sm text-gray-600">{workout.description}</em>
                <span className="block text-xs text-gray-400">{workout.date}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Navigate to full history */}
        <div className="mt-[10px]">
          <Link to="/workout-history" className="text-blue-600 underline">
            View Full Workout History
          </Link>
        </div>

        {/* Navigate to progress chart page */}
        <div className="mt-[10px]">
          <h4 className="font-bold my-3">Check out your progress so far:</h4>
          <Link to="/progress" className="text-blue-600 underline">
            View Your Progress
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;




