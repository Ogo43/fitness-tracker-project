import React from "react";
import { Link } from "react-router-dom";
import WorkoutLog from "./WorkoutLog";

function Dashboard() {
  const fullname = localStorage.getItem("fullname");
  const profilePic = localStorage.getItem("profilePic");

  return (
    <div style={{ padding: "20px" }}>
      {/* User Info */}
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Welcome, {fullname || "User"}!
        </h1>
        {profilePic && (
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "2px solid #ccc",
            }}
          />
        )}
      </div>

      {/* Recent Workouts */}
      <h2 style={{ marginBottom: "10px" }}>Here’s a quick view of your recent workouts:</h2>
      <WorkoutLog isDashboardView={true} />

      {/* Navigate to full log */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/workout-log" style={{ color: "blue", textDecoration: "underline" }}>
          View Full Workout Log
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

