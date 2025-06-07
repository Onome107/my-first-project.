
const express = require ('express');
const app = express();
const port = 3000;

//Request Logger
function requestLogger(req, res, next) {
    const method = req.method;
    const url = req.originalURL;
    console.log('[${new Date().toISOString()}] ${method} ${url}');
    next();
}

//Error Handler
function errorHandler(err, req, res, next) {
    console.error('[${new Date().toISOString()}] Error:',err);
    const statusCode = err.statusCode|| 500;
    const message = err.message || 'An unexpected error occurred.';

    res.status(statusCode).json({
        error:message,
    });
}

//Middleware
app.use(requestLogger);

//Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/error', (req, res, next) => {
    //Simulate an error
    const error = new Error('Something went wrong!');
    error.statusCode = 500;
    next(error); //Pass the error to the error handler
});

//Error Handler (must be after routes)
app.use(errorHandler);

app.listen(port, () => {
    console.log('Server listening on port $ {port}');
});