import { Router } from "express";
import { getAllBooksValidator, getSingleBookValidator, updateBooksValidator, validateCreateBook } from "../../validation/bookValidator.js";
import { validationErrorHandler } from "../../middlewares/validatorErrorHandler.js";
import { createBooks, getAllBooks, getSingleBook, updateBooks } from "../../controllers/booksController.js";

export const bookRouter = Router();

bookRouter.post('/create',validateCreateBook, validationErrorHandler, createBooks );
bookRouter.get('/' , getAllBooksValidator, validationErrorHandler,  getAllBooks );
bookRouter.get('/:bookId' , getSingleBookValidator, validationErrorHandler,  getSingleBook );
bookRouter.put('/update/:id' , updateBooksValidator, validationErrorHandler, updateBooks );

