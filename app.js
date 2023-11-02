const express = require('express')
const books = require('./data/books.json');

const app = express()
const port = 3000

//console.log(books);

// console.log(books.filter(book => book.year < 1900));

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the library");
});
//EJERCICIO 1
app.get("/all", (req, res) => {
    res.status(200).json(books);
});

//EJERCICIO 2
app.get('/first', (req, res) => {
    res.status(200).json(books[0])
})

//EJERCICIO 3
app.get('/last', (req, res) => {
    res.status(200).json(books[99])
})

//EJERCICIO 4
app.get('/middle', (req, res) => {
    res.status(200).json(books[50])
})

//EJERCICIO 5
app.get("/author/dante-alighieri", (req, res) => {
    
    const book = books.find(book => book.author === "Dante Alighieri");
    // console.log(book.title);
    
    res.status(200).json(book.title);
});


//EJERCICIO 6
app.get("/country/charles-dickens", (req, res) => {
    const book = books.find(book => book.author == "Charles Dickens");
    res.status(200).json(book.country);
});

//EJERCICIO 7
app.get("/year&pages/cervantes", (req, res) => {
    const book = books.find(book => book.author == "Miguel de Cervantes");
    res.status(200).json({
        year: book.year,
        pages: book.pages
    })
});

//EJERCICIO 8
app.get('/country/count/spain', (req, res) => {
    const book = books.filter(book => book.country === "Spain");
    res.status(200).json(book.length);
});

//EJERCICIO 9
app.get("/country/at-least/germany", (req, res) => {
    const book = books.find(book => book.country == "Germany");
    res.status(200).json(book.country.includes("Germany"));
});

//EJERCICIO 10
app.get("/pages/all-greater/200", (req, res) => {
    const book = books.every(book => book.pages >= 200);
    res.status(200).json(book);
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })

