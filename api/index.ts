import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import postsRouter from "../routes/posts.route";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/posts", postsRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
