# APDS7311
Task 2

# Payment Portal Backend

This is the backend for a **Payment Portal** built using **Node.js**, **Express.js**, and **MongoDB**. The application allows users to register, log in, and process payments through a secure interface. It also includes functionality for bank employees to view and verify transactions.

## Features
- **User Registration**: Users can create an account by providing necessary details like full name, account number, and password.
- **User Authentication**: Login functionality with JWT-based authentication.
- **Payment Processing**: Users can make payments by entering the amount, selecting currency, and providing SWIFT information.
- **Transaction Storage**: Payments are stored in a secured MongoDB database.
- **Security**: The app uses **Helmet** for securing HTTP headers, **bcrypt** for password hashing, and **CORS** to handle cross-origin requests.

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database to store user and payment information.
- **JWT**: For secure user authentication.
- **bcrypt**: For password hashing.
- **Helmet**: For enhanced HTTP security.
- **CORS**: For enabling cross-origin requests.

## Installation and Setup

### 1. Clone the repository
git clone https://github.com/your-repo/payment-portal-backend.git
cd payment-portal-backend

### 2. Install dependencies
npm install

### 3. Create a .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

### 4. Start the server
To start the server, run the following command:
 - npx nodemon server.js
The server will run on http://localhost:5000.

### Security Features
- Helmet: Adds security headers to prevent common attacks (XSS, Clickjacking, etc.).
- CORS: Cross-Origin Resource Sharing allows requests from the frontend.
- bcrypt: Passwords are hashed before being saved in the database for security.
- JWT Authentication: Secure authentication using JSON Web Tokens.
- Input Validation: Data is validated and sanitized to prevent injection attacks.


## REFERENCE LIST
Node.js
  - Website: https://nodejs.org/
  - Description: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast, scalable network applications. It serves as the backend        - environment for this project.
    
Express.js
  - Website: https://expressjs.com/
  - Description: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  - MongoDB

Website: https://www.mongodb.com/
  - Description: A NoSQL document-based database used for storing user and payment data in this project. The application interacts with MongoDB through the
  - Mongoose library.
  - Mongoose

Website: https://mongoosejs.com/
  - Description: A MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose simplifies working with MongoDB by providing schema-         based solutions.
  - bcryptjs

Website: https://www.npmjs.com/package/bcryptjs
  - Description: A library to hash and compare passwords in a secure manner. Used in this project for user password hashing.
  - JSON Web Tokens (JWT)

Website: https://jwt.io/
  - Description: A compact, URL-safe means of representing claims to be transferred between two parties. Used for authentication and authorization.
  - Helmet

Website: https://helmetjs.github.io/
  - Description: Helmet is a middleware for Node.js that helps secure your Express apps by setting various HTTP headers. It protects the application from common       security risks such as XSS and Clickjacking.
  - dotenv






