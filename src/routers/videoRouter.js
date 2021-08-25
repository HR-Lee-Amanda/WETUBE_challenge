import express from "express";
import {watch, edit, getUpload, postUpload, remove, postEdit} from "../controllers/videoController";

const videoRouter = express.Router();

//videoRouter.get("/upload", upload); // 이게 id 보다 먼저 와야됨 id는 변수라서.
videoRouter.get("/:id(\\d+)", watch); // id(\\d+) 이거는 정규식과 이름의 결합 ,, 이름 없으면 controller에서 req object 통해 불러올 수 없다.
//videoRouter.route("/:id(\\d+)/edit").get(edit).post(postEdit); -> 아래 두 줄 통합
videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id(\\d+)/edit", edit);
//videoRouter.get("/:id(\\d+)/remove", remove);
videoRouter.get("/upload", getUpload);
videoRouter.post("/upload", postUpload);

export default videoRouter;