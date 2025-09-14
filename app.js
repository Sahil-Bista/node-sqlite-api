import express from 'express';
import router from './routes/api/index.js';
import { globalErrorHandler } from './middlewares/globalErrorHandler.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerOptions from './swagger.json' assert {type : "json"};

const app = express();

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());

app.use('/api', router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req , res , next)=>{
    const error = new Error(`Route ${req.originalUrl} not found`);
    error.statusCode = 404;
    next(error);
})

app.use(globalErrorHandler);

export default app;
