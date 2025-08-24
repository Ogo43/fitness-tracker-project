import React, { useState, useEffect } from "react";
import { fetchExercise } from "../services/wgerApi";

function WorkoutLog({ isDashboardView = false }) {
  const [exercises, setExercises] = useState([]);
  const [workoutLog, setWorkoutLog] = useState({});

  // Load exercises from API
  useEffect(() => {
    const getExercises = async () => {
      try {
        const data = await fetchExercise();
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };
    getExercises();
  }, []);

  // Load saved workout log from localStorage
  useEffect(() => {
    const savedLog = localStorage.getItem("workoutLog");
    if (savedLog) {
      setWorkoutLog(JSON.parse(savedLog));
    }
  }, []);

  // Save workout log to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("workoutLog", JSON.stringify(workoutLog));
  }, [workoutLog]);

  const handleInputChange = (id, field, value) => {
    setWorkoutLog((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  return (
    <div>
      <h1>{isDashboardView ? "Quick Workout Log" : "Workout Log"}</h1>
      {exercises.length > 0 ? (
        <ul>
          {exercises
            .slice(0, isDashboardView ? 3 : 10)
            .map((exercise) => (
              <li key={exercise.id} style={{ marginBottom: "20px" }}>
                <h2>{exercise.name}</h2>
                {!isDashboardView && (
                  <div>
                    <label>
                      Sets:
                      <input
                        type="number"
                        min="1"
                        value={workoutLog[exercise.id]?.sets || ""}
                        onChange={(e) =>
                          handleInputChange(exercise.id, "sets", e.target.value)
                        }
                        style={{ margin: "0 10px" }}
                      />
                    </label>
                    <label>
                      Reps:
                      <input
                        type="number"
                        min="1"
                        value={workoutLog[exercise.id]?.reps || ""}
                        onChange={(e) =>
                          handleInputChange(exercise.id, "reps", e.target.value)
                        }
                      />
                    </label>
                  </div>
                )}
                {workoutLog[exercise.id] && (
                  <p>
                    {workoutLog[exercise.id].sets || 0} sets ×{" "}
                    {workoutLog[exercise.id].reps || 0} reps
                  </p>
                )}
              </li>
            ))}
        </ul>
      ) : (
        <p>Loading exercises...</p>
      )}
    </div>
  );
}

export default WorkoutLog;

