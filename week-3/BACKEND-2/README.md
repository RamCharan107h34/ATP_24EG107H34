# BACKEND-2

## Features

- Express server using ES modules
- MongoDB connection with Mongoose
- User registration and authentication
- Protected routes using JWT stored in an HTTP-only cookie
- Product management CRUD API
- User cart update endpoint for adding products
- Centralized error handling middleware

## Project structure

- `server.js` — main Express application entry point
- `package.json` — project dependencies and metadata
- `APIs/UserAPI.js` — user routes and authentication logic
- `APIs/ProductAPI.js` — product routes
- `models/UserModel.js` — user schema with cart subdocument
- `models/ProductModel.js` — product schema
- `middlewares/verifyToken.js` — JWT verification middleware

## Data models

### User model

Fields:
- `username` (string, required)
- `password` (string, required, stored as hashed password)
- `email` (string, required, unique)
- `age` (number)
- `cart` (array of items)
  - `product` (ObjectId reference to `product`)
  - `count` (number, default `1`)

### Product model

Fields:
- `productId` (string, required)
- `productName` (string, required)
- `price` (number, required, min `10000`, max `50000`)
- `brand` (string, required)

### Steps to create backend

1. Generate package.json file
   - npm init -y
2. Create HTTP server
   - Install & import Express module
   - npm install express
   - Import Express into server.js
3. Create an API
   - Use app.METHOD(path, requestHandler) for route definitions
4. Install nodemon to monitor updates
   - npm install -g nodemon

## Environment variables

- `PORT` — port for the Express server
- `DB_URL` — MongoDB connection string
- `SECRET_KEY` — secret key used to sign JWT tokens
