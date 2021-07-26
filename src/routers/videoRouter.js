import express from "express";
import {see, edit, upload, remove} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload); // 이게 id 보다 먼저 와야됨 id는 변수라서.
videoRouter.get("/:id(\\d+)", see); // id(\\d+) 이거는 정규식과 이름의 결합 ,, 이름 없으면 controller에서 req object 통해 불러올 수 없다.
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove);

export default videoRouter;