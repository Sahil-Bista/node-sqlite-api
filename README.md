# Project Title

The project is a simple RESTful API made for a library management system. It consists of basic CRUD operations carried out on authors and books while maintaining proper database relationships among them while using a relational database sqlite. The project makes use of Node.js as a programming language to create the API.




## Project Set Up and Running The Code
    1. Clone the repository using:
        git clone https://github.com/Sahil-Bista/yipl-backend-2025.git
    2. Move to the repo using 
        cd yipl-backend-2025
    3. Install dependencies
        npm install
    4. Run database migrations
        node migrations/author_table.js
        node migrations/book_table.js
    5. Run database seeders
        node seeders/authors_seed.js
        node seeders/books_seed.js
    6. Start the Server
        npm start

## Running Tests

To run tests, run the following command

```bash
  npm run test
  **Although the test cases were written it could not be run due to import related errors which I could not solve**
```



## Documentation

[Documentation](http://localhost:3000/api-docs)
Swagger documentation has been added to the project, to access simply click on the link above after starting the project.
## Tech Stack

**Server:** Node, Express     
**Database:** sqlite


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

    1. Challenge: I learned working with a sqlite database for the first time.
       Overcome by: Referring to the documentation

    2. Challenge: I applied unit testing for the first time which I found difficult to implement esepcially while understanding about mocks and working with asynchronous API calls.
       Overcome by: Referring to official documentation to get basic understanding, then referrring to medium blogs, then some youtube videos and finally solving some errors with the help of AI.
       Unable to overcome: Although i finally implemented it I could not solve the error I faced while making impoets even after using differnet configurations of jest as well as babel and even with the help of AI.

    3. Challenge: It was the first time that I applied swagger manually.
       Overcome By: Referring to medium blogs as i already knew its purpose and was only concerned about the implementation.

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

