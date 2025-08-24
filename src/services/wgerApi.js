import axios from "axios";

const API_URL = "https://wger.de/api/v2/";

// Fetch exercises
export const fetchExercise = async () => {
    try {
        const response = await axios.get(`${API_URL}exercise/?language=2`);
        return response.data.results; // This will return array of exercises
    } catch (error) {
        console.error("Error fetching exercises:", error);
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
