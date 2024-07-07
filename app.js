const express = require('express');
const app = express();
const PORT = 8080;

app.get('/sajjad', async(req, res) => {
    res.json({message: 'success', name: 'sajjad', lname: "alam", age: 25, gender: 'MALE'})
});

app.listen(PORT, () => {
    console.log("Server is running to the port ", PORT);
});