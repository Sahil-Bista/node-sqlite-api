import { body } from 'express-validator';

export const validateCreateBook = [
  body('title')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Title is required'),

  body('isbn')
    .notEmpty()
    .isLength({ min: 10, max: 10 })
    .withMessage('ISBN must be exactly 10 digits')
    .matches(/^\d{10}$/)
    .withMessage('ISBN must contain only digits'),

  body('published_year')
    .optional() 
    .isInt({ min: 1000, max: 9999 })
    .withMessage('Published year must be a 4-digit number representing a valid year'),

  body('author_id')
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage('Author ID must be a positive integer'),
];
