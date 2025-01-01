import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import {
  projectRouter,
  taskRouter,
  userRouter,
  teamRouter,
  searchRouter,
} from "./routes";

const app = express();
dotenv.config();

// Helmet middleware should be used first for security headers
app.use(helmet());

// Allow cross-origin requests
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan("common")); // Logging middleware

// Use JSON and URL-encoded parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

// Define a simple home route
app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);
app.use("/users", userRouter);
app.use("/teams", teamRouter);
app.use("/search", searchRouter);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
