import { Router } from "express";
import { authorRouter } from "./authors.js";
import { bookRouter } from "./books.js";

const router = Router();

router.use('/authors', authorRouter);
router.use('/books',bookRouter);

export default router;