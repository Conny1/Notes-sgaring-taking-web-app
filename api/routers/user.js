import express from "express";
import { login, signUp } from "../controlers/auth.js";

const routers = express.Router()

routers.post("/signin", signUp)

routers.post("/login", login)

export default routers