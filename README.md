# Chatter Box

Chatter Box is a full-stack real-time messaging system built with modern web technologies. It allows users to sign up, log in, update their profile (including profile pictures), and chat with other users in real time.

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Web framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for storing user and message data.
- **Mongoose**: ODM for MongoDB, used for schema modeling and database operations.
- **Socket.IO**: Enables real-time, bi-directional communication between clients and server.
- **JWT (jsonwebtoken)**: Used for secure authentication via JSON Web Tokens.
- **bcryptjs**: Password hashing for secure user authentication.
- **Cloudinary**: Cloud-based image storage for user profile pictures.
- **dotenv**: Loads environment variables from `.env` files.
- **cookie-parser**: Parses cookies attached to client requests.
- **CORS**: Handles Cross-Origin Resource Sharing for frontend-backend communication.
- **nodemon**: Development tool for automatically restarting the server on code changes.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast development server and build tool for React.
- **Zustand**: State management library for React.
- **Socket.IO Client**: Real-time communication with the backend.
- **Axios**: HTTP client for making API requests.
- **React Hot Toast**: Toast notifications for user feedback.
- **React Router DOM**: Routing for single-page application navigation.
- **Lucide React**: Icon library for UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Tailwind CSS component library for rapid UI development.

## Features

- User authentication (sign up, log in, log out)
- Real-time messaging between users
- Online user status indicator
- Profile management with image upload (Cloudinary)
- Responsive and modern UI

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/chatter-box.git
   cd chatter-box
   ```

2. **Install dependencies:**

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**

   - Copy `.env.example` to `.env` in the `backend` folder and fill in your credentials.

4. **Run the development servers:**

   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd frontend
     npm run dev
     ```

5. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:5001](http://localhost:5001)

## License

This project is licensed under the ISC License.

---

Feel free to contribute or open issues for improvements!
