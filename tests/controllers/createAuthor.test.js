import { beforeEach, describe } from "node:test";
import { createAuthor } from "../../controllers/authorController.js";
import * as dbHelpers from '../../utils/dbRunMethodWrapper.js'

jest.mock('../utils/dbRunMethodWrapper.js');

describe('createAuthor unit tests', ()=>{
    let req;
    let res;

    beforeEach(()=>{
        jest.clearAllMocks();

        req = {
            body : { name : 'Test', email : 'test@gmail.com'},
        };

        res = {
            status : jest.fn().mockReturnThis(),
            json : jest.fn(),
        };
    });

    test('should create a new author when email does not exist', async()=>{
        dbHelpers.fetchFirst.mockResolvedValue(null);
        dbHelpers.execute.mockResolvedValue();

        await createAuthor(req, res);

        expect(dbHelpers.fetchFirst).toHaveBeenCalledWith(
            expect.anything(),
            'SELECT * FROM authors WHERE email = ?',
            ['test@gmail.com']
        );

        expect(dbHelpers.execute).toHaveBeenCalledWith(
            expect.anything(),
            'INSERT INTO authors(name, email) VALUES (?,?)',
            ['Test','test@gmail.com']
        );

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ msg: 'Author created successfully' });
    })

    test('throw error if the email already exists', async()=>{
        dbHelpers.fetchFirst.mockResolvedValue({ name : 'Test', email : 'test@gmail.com'});

        await expect(createAuthor(req, res)).rejects.toMatchObject({
            message: 'Author with this email already exists',
            statusCode: 409,
        });

        expect(dbHelpers.fetchFirst).toHaveBeenCalledWith(
            expect.anything(),
            'SELECT * FROM authors WHERE email = ?',
            ['test@gmail.com']
        );

        expect(dbHelpers.execute).not.toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    })
})

