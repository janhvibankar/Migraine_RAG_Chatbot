# MigraineGuardian RAG Backend Deployment Guide

This guide explains how to deploy the MigraineGuardian RAG backend to Render.

## 1. Build Command
For Render, you only need to install dependencies.
Set your Build Command to:
```bash
npm install
```

## 2. Start Command
Set your Start Command to:
```bash
npm start
```
*(Render will automatically pick up the `start` script from `package.json`, which runs `node app.js`)*

## 3. Required Environment Variables
You must set the following environment variables in your Render Web Service dashboard:

- `MONGODB_URI`: Your MongoDB Atlas connection string.
- `GOOGLE_API_KEY`: Your Google Gemini API Key for vector embeddings.
- `GROQ_API_KEY`: Your Groq Cloud API Key for generating responses.
- `RAG_ALLOWED_ORIGINS` (or `CORS_ORIGIN`): A comma-separated list of allowed frontend URLs (e.g. `https://your-migraine-guardian-frontend.vercel.app`).

*Note: You don't need to specify `PORT` manually unless Render requires it, as Render sets it automatically.*

## 4. Health Endpoint
To check if the application is running properly, you can make a GET request to:
```
GET /health
```
**Response:**
```json
{
  "status": "ok"
}
```

## 5. Main API Endpoints
- `POST /api/chat`: The RAG chat endpoint for asking questions to the assistant.

## 6. How to Run Locally
Ensure you have a `.env` file in the `server` directory with the necessary variables.
Navigate to the `server` directory and run:
```bash
npm install
npm run dev
```
(Or `npm start` for production mode locally)

## 7. How to Configure Render
1. Create a new "Web Service" on Render.
2. Connect it to this GitHub repository.
3. Choose the "Node" environment.
4. Set the **Root Directory** to `server`.
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Add all the required environment variables listed in step 3 under the "Environment" tab.
8. Click "Create Web Service".

## 8. Important Deployment Notes
- **CORS Config:** Make sure to update the `RAG_ALLOWED_ORIGINS` environment variable once you deploy your React frontend so it can talk to this backend. If you don't do this, browser requests from your deployed frontend will be blocked.
- **Root Directory:** The backend code is inside the `server` folder. Be sure to configure the root directory as `server` in Render.
