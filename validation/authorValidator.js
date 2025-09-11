import { body } from 'express-validation';

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