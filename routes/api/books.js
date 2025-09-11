import { Router } from "express";
import { validateCreateBook } from "../../validation/bookValidator.js";
import { validationErrorHandler } from "../../middlewares/validatorErrorHandler.js";
import { createBooks } from "../../controllers/booksController.js";

export const bookRouter = Router();

bookRouter.post('/create',validateCreateBook, validationErrorHandler, createBooks );