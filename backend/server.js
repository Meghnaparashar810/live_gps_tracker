import dotenv from "dotenv";

dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDb from './config/db.js';
import router from "./routes/userrotues.js";

const app = express();

const PORT = process.env.PORT

app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5500"],
    withCredentials: true
}
));

app.use(express.json());

app.use("/api/locations", router);

app.listen(PORT, () => {
    connectDb();
    console.log(`server is running on port ${PORT}`);
})

