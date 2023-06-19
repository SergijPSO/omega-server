import Router from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:_id", PostController.getOne);
router.put("/posts/:_id", PostController.update);
router.delete("/posts/:_id", PostController.delete);

export default router;
