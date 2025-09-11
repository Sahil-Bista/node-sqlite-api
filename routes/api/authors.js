import { Router } from "express";
import { createAuthorValidation } from "../../validation/authorValidator.js";
import { validationErrorHandler } from "../../middlewares/validatorErrorHandler.js";
import { createAuthor } from "../../controllers/authorController.js";

export const authorRouter = Router();

authorRouter.post('/create', createAuthorValidation, validationErrorHandler , createAuthor)