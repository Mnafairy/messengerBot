import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

// Configure view engine
viewEngine(app);

// Configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize web routes and pass app instance
initWebRoutes(app);

// Set port from environment or use default 8080
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
