import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { appRouter } from "./src/http/routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(appRouter);

app.listen(3333, () => console.log('🚀 App started on port 3333!'));