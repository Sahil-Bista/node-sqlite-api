import { body, query } from 'express-validator';

export const createAuthorValidation = [
    body("email")
        .trim()
        .normalizeEmail()
        .notEmpty()
        .isEmail()
        .withMessage('Please enter a valid email address'),
    
    body("name")
        .trim()
        .escape()
        .isLength({min : 2})
        .withMessage('Author name must be greater than 2 characters')
]

export const getAuthorValidation = [
    query("name")
        .optional()
        .trim()
        .escape()
        .isLength({min : 2})
        .withMessage('Author name must be greater than 2 characters')
]