# 🏋️ Fitness Tracker App    

A simple yet powerful **React-based fitness tracking application** that helps users log workouts, explore exercises, and monitor progress.  

This app is designed for fitness enthusiasts who want to stay consistent with their training and track performance over time.  

---

## Features
- **Workout Logging** – View exercise name, category etc. Add exercises with sets, reps.  
- **Workout History** – Review previous workouts and track progress  
- **Exercise Library** – Fetch exercises with descriptions and images from the **Wger API**  
- **User Profile** – Save your name and profile picture for personalization  
- **Modern UI** – Clean and responsive design for mobile and desktop  
- **Dashboard** – Review of workouts and history, alongside links to navigate to the pages. 

---

## Tech Stack
- **Frontend:** React, React Router  
- **State Management:** React Hooks (useState, useEffect)  
- **API Integration:** [Wger API](https://wger.de/en/software/api)  
- **Styling:** Tailwind CSS and External CSS 
- **Tooling:** Node.js, npm  

---

## Project Structure
fitness-tracker/
│── src/
│ │── assets (images, icons, etc.)
│ ├── components/ 
│ │ ├── # Dashboard, WorkoutLog, WorkoutHistory
│ ├── services/ # API integration files (wgerApi.js)
│ ├── App.js # Main app file with routing
│ ├── index.js # Entry point
│── package.json # Dependencies and scripts
│── README.md # Documentation

---

## **Usage**

1. **Open the app in your browser**  
2. **Sign up or Log in from the home page, enter your name, email, profile picture etc.**  
3. **Scroll down for exercises** from the Exercise Library  
4. **Choose desired workouts and input sets, reps**  
5. **Check your Workout History as well as Progress Chart** to stay on track   

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Ogo43/fitness-tracker.git
cd fitness-tracker
npm install
npm start

 
