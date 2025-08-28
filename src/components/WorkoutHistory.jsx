import React, { useEffect, useState } from "react";

const WorkoutHistory = () => {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("completedWorkouts")) || [];
    setCompletedWorkouts(saved);
  }, []);

  const handleDeleteWorkout = (indexToDelete) => {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      const updatedWorkouts = completedWorkouts.filter(
        (_, index) => index !== indexToDelete
      );
      setCompletedWorkouts(updatedWorkouts);
      localStorage.setItem("completedWorkouts", JSON.stringify(updatedWorkouts));
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Workout History
      </h2>

      {completedWorkouts.length === 0 ? (
        <p className="text-gray-500 text-center">No completed workouts yet.</p>
      ) : (
        <ul className="space-y-4">
          {completedWorkouts.map((workout, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition flex justify-between items-start"
            >
              <div>
                <h3 className="text-lg font-semibold text-blue-600">
                  {workout.name}
                </h3>
                <p className="text-gray-600 italic">{workout.description}</p>
                <span className="text-sm text-gray-400">{workout.date}</span>
              </div>
              <button
                onClick={() => handleDeleteWorkout(index)}
                className="ml-4 px-3 py-1 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutHistory;



