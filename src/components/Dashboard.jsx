import React, { useState, useEffect } from "react";

function Dashboard() {
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("fullname");
    const storedPic = localStorage.getItem("profilePic");

    if (storedName) setUserName(storedName);
    if (storedPic) setProfilePic(storedPic);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="user-header w-[60px] h-[60px] rounded-[50%]">
        {profilePic ? (
          <img src={profilePic} alt="Profile-image" />
        ) : (
          <div className=" flex justify-center items-center text-2xl text-white w-[60px] h-[60px] rounded-[50%] bg-[#ccc]">
            {userName ? userName.charAt(0).toUpperCase() : "U"}
          </div>
        )}
        <h1>Welcome, {userName ? userName : "User"}</h1>
      </div>
      <h2>Fitness Dashboard</h2>

      <section className="dashboard-section">
        <h3>Quick Workout Log</h3>
        <WorkoutLog isDashboardView={true} />
      </section>

      <section className="dashboard-section">
        <h3>Recent Workout History</h3>
        <WorkoutHistory isDashboardView={true} />
      </section>

      <section className="dashboard-section">
        <h3>Your Progress</h3>
        <ProgressChart isDashboardView={true} />
      </section>
    </div>
  );
}

export default Dashboard;
