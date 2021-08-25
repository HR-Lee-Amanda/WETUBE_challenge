import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({ // 데이터의 형태
    title : String,
    description : String,
    createdAt : Date,
    hashTags : [{type : String}],
    meta : {
        views : Number,
        rating : Number
    }
});

const movieModel = mongoose.model("Video", videoSchema);

export default movieModel;