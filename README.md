# 🐾 PawPal - Your Pet Management Companion

PawPal is a CRUD-based MERN stack application that allows users to manage pet data with ease. The app features JWT-based authentication for secure login and registration, and provides functionality for adding, updating, viewing, and deleting pet details. Built with React, Node.js, Express, and MongoDB, PawPal is a showcase of full-stack development expertise.
You can check it out [here!](https://pawpal-pearl.vercel.app)

<img src="pawpalscreen.png">

## 🚀 Features

- **JWT Authentication**: Secure login and registration.
- **CRUD Functionality**: Create, Read, Update, and Delete pet data.
- **Responsive UI**: Modern, mobile-friendly design using Tailwind CSS.
- **Error Handling**: Informative error messages for seamless user experience.
- **API Integration**: Backend API built with Express and MongoDB.
- **Concurrent Development**: Use `npm run dev` to run both frontend and backend servers simultaneously.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: React Hooks

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imtaki/PawPal.git
   ```

2. Navigate to the project folder:
   ```bash
   cd PawPal
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   cd ..
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` folder with the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=3001
     ```
   - Create a `.env` file in the `frontend` folder with the following (optional):
     ```env
     REACT_APP_API_URL=http://localhost:3001
     ```

5. Rename folders to `frontend` and `backend` if they are named differently in your setup.

## Running the Application

1. Navigate to the root folder (`pawpal`).
2. Start the application using:
   ```bash
   npm run dev
   ```
   This will start both the frontend and backend servers concurrently using `concurrently`.

3. Open your browser and visit `http://localhost:3000` to view the application.

## 📂 Folder Structure

```plaintext
PawPal/
├── frontend/     # React frontend
│   ├── src/      # Source code for the frontend
│   ├── public/   # Public assets
│   └── ...
├── backend/      # Express backend
│   ├── routes/   # API routes
│   ├── models/   # MongoDB models
│   ├── controllers/  # Route logic
│   └── ...
└── README.md
```

## Scripts

- **Frontend**:
  - `npm start`: Starts the React development server.
  - `npm build`: Builds the production-ready app.
- **Backend**:
  - `npm start`: Starts the Express server.
  - `npm run dev`: Starts the server with hot-reload using nodemon.
- **Root (Concurrent)**:
  - `npm run dev`: Runs both frontend and backend servers concurrently.

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login user

### Pets

- **GET** `/api/pets` - Fetch all pets
- **GET** `/api/pets/:id` - Fetch a pet by ID
- **POST** `/api/pets` - Add a new pet
- **PUT** `/api/pets/:id` - Update pet details
- **DELETE** `/api/pets/:id` - Delete a pet

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Enjoy managing your pets with **PawPal**! 🐾
