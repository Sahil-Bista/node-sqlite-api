import { Router } from "express";
import { authorRouter } from "./authors";

const router = Router();

router.use('/authors', authorRouter);

export default router;