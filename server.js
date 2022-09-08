const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
//
app.use(express.static('public'))

const directoryPath = path.join(__dirname, 'public/assets');

app.get('/images', (req, res) => {
    fs.readdir(directoryPath).then(function(files) {
        res.json({files});
    }).catch((err) => {
        if (err) {
            return console.log('oh no, an error', err);
        }
    });
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});