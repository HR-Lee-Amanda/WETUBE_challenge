//const express = require("express");
import express from "express";

const PORT = 4000;

const app = express(); // 1. express application 이거 먼저 만들어져야 app 사용 가능

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    //res.send("<h1>Welcome to Homepage., Middlewares</h1>");
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url=== "/protected") {
        return res.send("<h1>NOT Allowed</h1>");
    }
    console.log("Allowed, You may continue.");
    next();
}

const handleHome = (req, res) => { // controller
    return res.send("Welcome to Homepage.");
    //next();
}

const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge.");
}

app.use(logger); // app.get() 이전에 와야한다.
// get 메소드의 callback 에는 req, res 두 개의 object 있다. 
app.use(privateMiddleware);
app.get("/", handleHome);
// "/"으로 브라우저의 get request 오면 express는 handleHome에 req, res object를 넣어준다.
app.get("/protected", handleProtected);



const handleListening = () => // 2. 외부 접속 listen
    console.log(`Server Listening on port http://localhost:${PORT}`);


    app.listen(PORT, handleListening);  




