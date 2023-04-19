// const express = require("express");
import express from "express";
import { engine } from "express-handlebars";
import router from "./routes/studentsRoute.js";
import mongoose from "mongoose";
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/students')
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.use("/student",router);
app.listen(3000);
