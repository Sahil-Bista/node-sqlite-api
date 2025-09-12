import { Router } from "express";
import { getAllBooksValidator, validateCreateBook } from "../../validation/bookValidator.js";
import { validationErrorHandler } from "../../middlewares/validatorErrorHandler.js";
import { createBooks, getAllBooks, updateBooks } from "../../controllers/booksController.js";

export const bookRouter = Router();

bookRouter.post('/create',validateCreateBook, validationErrorHandler, createBooks );
bookRouter.get('/' , getAllBooksValidator, validationErrorHandler,  getAllBooks );
bookRouter.put('/update/:id' , updateBooks );

