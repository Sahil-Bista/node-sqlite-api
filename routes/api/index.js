import { Router } from "express";
import { authorRouter } from "./authors.js";

const router = Router();

router.use('/authors', authorRouter);

export default router;