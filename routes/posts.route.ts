import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  createComment,
} from "../controllers/posts.controller";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/add-post", createPost);
router.post("/add-comment", createComment);

export default router;
