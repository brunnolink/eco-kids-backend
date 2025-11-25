import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { appRouter } from "./http/routes";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,PATCH,DELETE",
}));
app.use(express.json());
app.use(appRouter);

app.listen(3333, () => console.log('🚀 App started on port 3333!'));