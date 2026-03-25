# Zerodha Clone Full-Stack Project

This is a comprehensive full-stack clone of Zerodha's trading interface. It features secure authentication, real-time dynamic database routing, and a beautifully replicated Kite Dashboard.

## 🚀 Project Structure

This repository is organized into three completely independent modules:

1. **`frontend/`** 
   - The primary landing page and user authorization portal.
   - Built with React.js.
   - Handles secure sign up, log in, and password recovery, natively redirecting users directly into their dashboard portal upon authentication.

2. **`dashboards/`** 
   - The core trading application interface mimicking the actual Zerodha Kite terminal.
   - Built with React.js, React-Router, and Chart.js.
   - Features a live 50-Company intelligent WatchList, dynamic Portfolio graphic generation, and real-time empty-state detection. 

3. **`backend/`**
   - The robust Express.js & Node.js backend.
   - Connects to a cloud-hosted MongoDB Atlas Cluster utilizing Mongoose schemas.
   - Intercepts and synchronously processes real-time REST API requests. Placing a `Buy/Sell` order inside the Dashboard instantly synchronizes the mathematical deltas across the `Holdings`, `Orders`, and `Positions` structures automatically.

## ⚙️ Tech Stack

* **Frontend:** React, React Router, Chart.js, HTML5, Vanilla CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose
* **Authentication:** Passport.js (Local Strategy, passport-local-mongoose)
* **Deployment:** Vercel (Frontends) & Render (Backend)

## 🏃‍♂️ Running Locally

1. Open your terminal in the `backend/` directory. Run `npm install` and then `node index.js`. (Requires a .env file containing `MONGO_URL`).
2. Open another terminal in the `dashboards/` directory. Run `npm install` and then `npm start`.
3. Open a third terminal in the `frontend/` directory. Run `npm install` and then `npm start`.

## ✨ Key Features
* Dynamic interactive 30/70 Split UI replicating the premium Kite aesthetic.
* Single-page routing without hard browser refreshes.
* Secure isolated authentication securely passing user credentials into the Dashboard through URL parameters.
* Smart "Empty States" that guide users when their portfolio or orders are completely empty.
