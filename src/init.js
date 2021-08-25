import "./db"; // 파일 전체 import
import Video from "./models/video";
import app from "./server";


const PORT = 4000;

const handleListening = () => // 2. 외부 접속 listen
console.log(`✅ Server Listening on port http://localhost:${PORT}`);


app.listen(PORT, handleListening);  

