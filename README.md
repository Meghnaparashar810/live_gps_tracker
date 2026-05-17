

# 📍 Live GPS Tracker

A real-time GPS tracking web application built using the MERN Stack. This project allows users to share and track live locations on an interactive map.

---

# 🚀 Features

* 🌍 Real-time location tracking
* 🗺️ Interactive map using Leaflet.js
* 📡 Live latitude & longitude updates
* 🔄 Real-time communication using Socket.io
* 📱 Responsive UI
* ⚡ Fast backend with Express.js
* 🗄️ MongoDB database integration
* 🔐 Environment variable support using dotenv

---

# 🛠️ Tech Stack

## Frontend

* HTML
* CSS
* JavaScript
* Leaflet.js

## Backend

* Node.js
* Express.js
  

## Database
* MongoDB

# 📂 Project Structure

live_gps_tracker/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── package.json
└── README.md

# ⚙️ Installation

## 1️⃣ Clone the Repository

sender link 
[git clone https://github.com/your-username/live_gps_tracker.git](https://livegpstracker-lq8jgfrgu-meghnaparashar810s-projects.vercel.app/)


viewer link
[sender live_gps_tracker](https://live-gps-trackersecond.vercel.app/)

## 2️⃣ Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

If you are using plain HTML/CSS/JS then simply open the frontend folder using Live Server.

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

# ▶️ Run the Project

## Start Backend Server

```bash
npm run dev
```

or

```bash
node server.js
nodemon index.js
```

---

## Start Frontend

Open `index.html` using Live Server.

---

# 🌐 API Example

## Send Location

```http
POST /location
```

### Request Body

```json
{
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

---

# 🗺️ Map Integration

This project uses:

* Leaflet.js
* OpenStreetMap Tiles

---



# 📦 Future Improvements

* 🔐 User authentication
* 📍 Multiple user tracking
* 📱 Mobile application support
* 🚨 Geo-fencing alerts
* 🛰️ Offline tracking supports
* 📊 Tracking history

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👩‍💻 Author

Made with ❤️ by Meghna
