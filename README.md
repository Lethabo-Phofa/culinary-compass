# Culinary Compass

A full-stack web application designed to help users discover, organize, and plan their meals with a personalized recipe collection and meal planner.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Status](#project-status)
- [License](#license)

## Features

- **User Authentication:** Secure user registration and login using JSON Web Tokens (JWT).
- **Personalized Recipe Collection:** Users can save and organize their favorite recipes. (Coming Soon)
- **Weekly Meal Planner:** A tool to help users plan their meals for the week. (Coming Soon)
- **Shopping List Generator:** Automatically creates a shopping list from a user's meal plan. (Coming Soon)

## Technology Stack

This project is built using the **MERN** stack:

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Tools:** Postman/Thunder Client, Nodemon

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account (for the database)

### Backend Setup (Day 1)

1.  Navigate into the `server` directory.
2.  Install all dependencies: `npm install`
3.  Create a `.env` file with your `MONGO_URI` and `JWT_SECRET`.
4.  Start the server in development mode: `npm run dev`

### Frontend Setup (Day 2)

_Coming soon_

## Project Status

**Day 1: Backend complete!**
The server is set up, connected to the database, and the user authentication endpoints (`/api/auth/register` and `/api/auth/login`) have been successfully tested.

## License

This project is licensed under the MIT License.
