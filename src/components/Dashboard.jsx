import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WorkoutLog from "./WorkoutLog";
import { fetchExercisesWithInfo } from "../services/wgerApi";

function Dashboard() {
  const fullname = localStorage.getItem("fullname");
  const profilePic = localStorage.getItem("profilePic");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="p-[20px]">
      {/* User Info */}
      <div className="mb-[20px]">
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

      {/* Recent Workouts */}
      <h2 className="mb-[10px]">Here’s a quick view of your recent workouts:</h2>

      {loading ? (
        <p className="text-gray-500">Loading exercises…</p>
      ) : (
        // Slice to 2 here and pass down
        <WorkoutLog isDashboardView={true} exercises={exercises.slice(0, 2)} />
      )}

      {/* Navigate to full log */}
      <div className="mt-[20px]">
        <Link to="/workout-log" className="text-blue-600 underline">
          View Full Workout Log
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;



