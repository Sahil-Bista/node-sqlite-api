import { Router } from "express";
import { createAuthorValidation, getAuthorValidation } from "../../validation/authorValidator.js";
import { validationErrorHandler } from "../../middlewares/validatorErrorHandler.js";
import { createAuthor, getAllAuthors } from "../../controllers/authorController.js";

export const authorRouter = Router();

authorRouter.post('/create', createAuthorValidation, validationErrorHandler , createAuthor);
authorRouter.get('/', getAuthorValidation, validationErrorHandler , getAllAuthors);
