import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({message: "Happy API"});
})

app.listen(3333);