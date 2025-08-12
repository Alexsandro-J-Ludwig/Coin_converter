import dotenv from "dotenv";
dotenv.config();

import cors from 'cors';

import express from "express";

import routes from "./src/routes/apiRoutes.js";

const port = 5001;

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static('public'));

app.use("/", routes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))