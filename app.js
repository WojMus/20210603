const functions = require("./functions")
const express = require("express");
const path = require("path");
const server = express();
const port = process.env.PORT || 3000; //ma się udostępnić na wolnym porcie a jak nie to na 3000

server.set("view engine", "hbs");
server.use("/assets", express.static(path.join(__dirname, "./assets")));
server.use("/js", express.static(path.join(__dirname, "./js")));

server.get("/", function (req, res) {
    res.render("index", {
        pageTitle: "Lekacja Node",
        title: functions.someText
    })
})

server.get("/about", function (req, res) {
    res.render("about")
})

server.get("/section/technology", function (req, res) {
    res.send("strona technologiczna")
})

server.listen(port, (err) => {
    if (err) { return console.log(`coś poszło nie tak ${err}`) };
    console.log(`Aplikacja działa na porcie ${port}`)
});



// const handler = (request, response) => { //te nazwy w funkcji są dowolne
//     console.log("sample message")
//     response.end("Hello World") //metoda na wyświetlanie na ekranie 
// }

// const server = http.createServer(handler);

// const port = 3000;



// const functions = require("./functions");

// //helloWorld();
// //add(1, 2);