import axios from "axios";

const API_URL = "https://wger.de/api/v2/";


// Fetch exercise info

export const fetchExercisesWithInfo = async () => {
  try {
    const response = await axios.get(`${API_URL}exerciseinfo/`, {
      params: {
        language: 2, // English
        limit: 20,   // Fetch 10 exercises
        offset: 0,   // Start from first exercise
      },
      headers: {
        Accept: "application/json",
      },
    });
    return response.data.results; // This includes name, description, images, category, equipment
  } catch (error) {
    console.error("Error fetching exercise info:", error);
    return [];
  }
};

// Fetch workouts
export const fetchWorkouts = async () => {
    try {
        const response = await axios.get(`${API_URL}workout/`);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching workouts:", error);
        return [];
    }
};




