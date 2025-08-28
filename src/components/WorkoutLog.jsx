import React, { useEffect, useState } from "react";
import { fetchExercisesWithInfo } from "../services/wgerApi";

const WorkoutLog = ({
  exercises: injectedExercises = null,
  isDashboardView = false,
}) => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState({});
  const [, setCompletedWorkouts] = useState([
    () => JSON.parse(localStorage.getItem("completedWorkouts")) || [],
  ]);

  // Load saved log from localStorage
  useEffect(() => {
    const savedLog = localStorage.getItem("workoutLog");
    if (savedLog) setLog(JSON.parse(savedLog));
  }, []);

  // Fetch only if no injected exercises were provided
  useEffect(() => {
    if (Array.isArray(injectedExercises) && injectedExercises.length > 0) {
      setLoading(false);
      return;
    }

    const loadExercises = async () => {
      try {
        const data = await fetchExercisesWithInfo();
        const exerciseList = Array.isArray(data) ? data : data?.results || [];
        setExercises(exerciseList);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
        setExercises([]);
      } finally {
        setLoading(false);
      }
    };

    loadExercises();

    // Load completed workouts from localStorage
    const saved = JSON.parse(localStorage.getItem("completedWorkouts")) || [];
    setCompletedWorkouts(saved);
  }, [injectedExercises]);

  // Persist log changes
  useEffect(() => {
    localStorage.setItem("workoutLog", JSON.stringify(log));
  }, [log]);

  const handleInputChange = (exerciseId, field, value) => {
    setLog((prev) => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        [field]: value,
      },
    }));
  };

  const handleCompleteWorkout = (exercise) => {
    if (!exercise || !exercise.name) {
      alert("Workout details missing, cannot mark as complete.");
      return;
    }

    const completedWorkout = {
      id: exercise.id || Date.now(),
      name: exercise.name,
      description: exercise.description || "No description available",
      date: new Date().toLocaleString(),
    };

    const saved = JSON.parse(localStorage.getItem("completedWorkouts")) || [];
    saved.push(completedWorkout);
    localStorage.setItem("completedWorkouts", JSON.stringify(saved));

    alert(`Workout "${exercise.name}" marked as complete!`);
  };

  if (loading)
    return <p className="text-center text-gray-500">Loading exercises...</p>;

  // Prefer injected list (from Dashboard), otherwise use fetched list
  const displayed =
    Array.isArray(injectedExercises) && injectedExercises.length > 0
      ? injectedExercises
      : exercises;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isDashboardView ? " Workout Logs" : "Workout Log"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayed.length > 0 ? (
          displayed.map((exercise) => {
            const englishTranslation = exercise.translations?.find(
              (t) => t.language === 2
            );
            const name =
              englishTranslation?.name || exercise.name || "Unnamed Exercise";
            const description = englishTranslation?.description
              ? englishTranslation.description.replace(/<[^>]+>/g, "")
              : "No description available";
            const userLog = log[exercise.id] || { sets: "", reps: "" };

            return (
              <div
                key={exercise.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
              >
                <h3 className="text-xl font-bold mb-3">{name}</h3>

                <p className="text-gray-600 mb-1">
                  Category: {exercise.category?.name || "N/A"}
                </p>

                {exercise.equipment?.length > 0 && (
                  <p className="text-sm text-gray-500 mb-2">
                    Equipment:{" "}
                    {exercise.equipment.map((e) => e.name).join(", ")}
                  </p>
                )}

                <h4 className="text-md font-bold mb-2">Description</h4>
                <p>{description}</p>

                {exercise.images?.length > 0 && (
                  <img
                    src={exercise.images[0].image}
                    alt={name}
                    className="h-40 object-cover mt-3 rounded"
                  />
                )}

                {/* Hide inputs on the dashboard preview if you prefer */}
                {!isDashboardView && (
                  <div className="mt-4 flex items-center gap-4">
                    <input
                      type="number"
                      placeholder="Sets"
                      value={userLog.sets}
                      onChange={(e) =>
                        handleInputChange(exercise.id, "sets", e.target.value)
                      }
                      className="border p-2 rounded w-20 text-center"
                    />
                    <input
                      type="number"
                      placeholder="Reps"
                      value={userLog.reps}
                      onChange={(e) =>
                        handleInputChange(exercise.id, "reps", e.target.value)
                      }
                      className="border p-2 rounded w-20 text-center"
                    />
                  </div>
                )}
                {/* Complete Button */}
                {!isDashboardView && (
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded mt-5"
                    onClick={() =>
                      handleCompleteWorkout({
                        ...exercise,
                        name,
                        description,
                      })
                    }
                  >
                    Complete Workout
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No exercises found.</p>
        )}
      </div>
    </div>
  );
};

export default WorkoutLog;
