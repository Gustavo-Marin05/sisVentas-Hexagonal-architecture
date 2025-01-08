import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"; //esto sirve para gaurdar la cookie
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js'

const app = express();
app.use(express.json());
app.use(cookieParser());
//app.use(bodyParser.urlencoded({ extended: true}))

app.use(morgan('dev'));

app.use('/api',authRoutes);
app.use('/api',productRoutes);
app.use('/api',categoryRoutes);
export default app;