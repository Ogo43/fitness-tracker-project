import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function ProgressChart() {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    // Fetch workout history from localStorage
    const history = JSON.parse(localStorage.getItem("workoutHistory")) || [];

    // Transform workout history into chart-friendly format
    const chartData = history.map((workout, index) => ({
      day: `Day ${index + 1}`,
      sets: workout.sets,
      reps: workout.reps,
    }));

    setProgressData(chartData);
  }, []);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Workout Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sets" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="reps" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;
