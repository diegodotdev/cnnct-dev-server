import express from "express";
import { getPosts, getPost } from "../controllers/posts.controller";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);

export default router;
