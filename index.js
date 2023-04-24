import express from "express";
import { create, engine } from "express-handlebars";
import AuthRoutes from "./routes/auth.js";
import ProductsRoutes from "./routes/products.js";
import flash from 'connect-flash'
import session from 'express-session'
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const hbs = create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(session({secret: 'Hoji', resave: false, saveUninitialized:false}))
app.use(flash())

app.use(AuthRoutes);
app.use(ProductsRoutes);

const startApp = () => {
  try {
    mongoose.set("strictQuery", false);

    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

    const PORT = process.env.PORT || 4100;
    app.listen(PORT, () => console.log(`Server is running : ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
startApp()
