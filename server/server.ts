import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { appRouter } from "./src/http/routes";


dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(appRouter);

app.listen(3333, () => console.log('🚀 App started on port 3333!'));