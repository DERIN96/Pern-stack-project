# Product List

Product List is a full-stack application built using the PERN stack (PostgreSQL, Express, React, Node.js). It allows users to manage and view a list of products. The frontend is built with React using Vite, while the backend is created using Node and Express. The database used is PostgreSQL. The project is hosted on Vercel for the frontend, while the backend is hosted locally using Ngrok.

## Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Node.js and Express
- **Database**: PostgreSQL
- **Hosting**:
  - Frontend: Vercel
  - Backend: Local server via Ngrok

## Features

- View a list of products
- Add, update, and delete products
- Interact with the database via API calls
- Real-time backend using Node and Express

## Getting Started

To run the project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/DERIN96/Pern-stack-project.git
```

### 2. Modify the Code for Local Setup

Replace the code on **line 3 and 4** in `frontend/frontend-project/src/services/productService.js` with the following:

```javascript
const apiUrl = "http://localhost:3000/api/products";
const apiConfig = {};
```

### 3. Create the Database Table

Run the following SQL command in your PostgreSQL setup to create the required table:

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC
);
```

### 4. Configure Environment Variables

Add your database credentials to the `.env` file located in the `backend/.env` directory. The required variables are:

- `DB_USER`
- `DB_NAME`
- `DB_PASSWORD`

If the database host or port differs from the defaults, update the `.env` file with the appropriate `DB_HOST` and `DB_PORT` values.

### 5. Run the Application

Start both the frontend and backend services:

#### Frontend

```bash
cd frontend-project
npm run dev
```

#### Backend

```bash
cd backend
nodemon index.js
```

## Deployed Application Link

The live application is available at:

[https://www.derinproject.tech](https://www.derinproject.tech)

## Additional Notes

- The application has been thoroughly tested to ensure smooth functionality.
- Backend APIs were tested using Postman.
- The React frontend has been manually tested to confirm its seamless interaction with the backend.
- Axios is used to handle HTTP requests between the frontend and backend.
- The backend is hosted on a local server with port forwarding facilitated by Ngrok.
- The frontend is hosted on Vercel and uses a custom domain for accessibility.
- The React app is designed with scalability in mind to support future enhancements.


