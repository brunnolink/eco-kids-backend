import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";


dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
// app.use(routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 EcoKids backend rodando na porta ${PORT}`);
});