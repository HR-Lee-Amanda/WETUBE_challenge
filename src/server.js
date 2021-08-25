//const express = require("express");
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express(); // 1. express application 이거 먼저 만들어져야 app 사용 가능

app.set("view engine", "pug"); // view engine 을 pug 로 설정한다.
app.set("views", process.cwd()+"/src/views"); // view engine 파일을 찾는 경로 설정

app.use(morgan("dev"));
// app.use(logger);  app.get() 이전에 와야한다.
app.use(express.urlencoded({extended: true}));

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// get 메소드의 callback 에는 req, res 두 개의 object 있다. 
// "/"으로 브라우저의 get request 오면 express는 handleHome에 req, res object를 넣어준다.


const handleListening = () => // 2. 외부 접속 listen
console.log(`Server Listening on port http://localhost:${PORT}`);


app.listen(PORT, handleListening);  




