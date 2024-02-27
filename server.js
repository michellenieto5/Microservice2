'use strict';

const PORT = 3000;
const fs = require('fs');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

//use a get method, provide a file path, function 
app.get("/review", (req, res) => {
    console.log(req.query) //This is a object that contains the properties 
    // Write the ISBN number to the file
   fs.appendFile('/Users/michellevanessapinonieto/Desktop/ISBNLinkTest/isbnPipeLine.txt', `${req.query.isbn}\n`, (err) => {
        if (err) {
             console.error(`Error writing to file: ${err}`);
        }
        console.log(`ISBN written to file: ${req.query.isbn}`);
    });
    // Read the link from the file
    fs.readFile('/Users/michellevanessapinonieto/Desktop/ISBNLinkTest/isbnPipeLine.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error(`Error reading from file: ${err}`);
            res.send(`Error reading from file`);
        } else {
            // Assuming the link is present on the last line of the file
          //  setTimeout(updateFileAndGenerateLink, 10000);
            const link = data.trim().split('\n').pop();
            console.log(link)
            res.send(`Hi there. The ISBN provided was ${req.query.isbn}. The Amazon link is: ${link}`);
        }
    });
   // res.send(`Hi there. 2 The isbn provided was ${req.query.isbn}`) // send this back to the browser 
})

app.post("/review", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});