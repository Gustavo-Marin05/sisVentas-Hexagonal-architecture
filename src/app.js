import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"; //esto sirve para gaurdar la cookie
import authRoutes from './routes/auth.routes.js'

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(morgan('dev'));

app.use('/api',authRoutes)
export default app;