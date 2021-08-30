import Video from "../models/video";

export const trending = async(req, res) => {
    const videos = await Video.find({}).sort({createdAt : "descending"});
    return res.render("home", {pageTitle : "Home", videos}); // controller
}
export const watch = async(req, res) => {
    const id = req.params.id; // const {id} = req.params;
    const video = await Video.findById(id);
    if (video) 
        return res.render("watch", {pageTitle : video.title, video});
    else return res.render("404", {pageTitle : "Video Not Found"});
}
export const getEdit = async(req, res) => {
    const id = req.params.id;
    console.log(req.params);
    const video = await Video.findById(id);
    if (!video) {
       return res.render("404", {pageTitle : "Video Not Found"});
    } 
    console.log("Here");
    return res.render("edit", {pageTitle : `Edit : ${video.title}`, video});
}
export const postEdit = async(req, res) => {
    const id = req.params.id;
    const video = await Video.exists({_id : id});
    const {title, description, hashtags} = req.body;
    if (!video) {
        return res.render("404", {pageTitle : "Video Not Found"});
    } 
    await Video.findByIdAndUpdate(id, {
        title, description, 
        hashtags : Video.formatHashtags(hashtags)
    });
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
}
export const postUpload = async (req, res) => {
    // console.log(req.body);
    const {videoTitle, description, hashtags} = req.body;
    try {
        await Video.create({ // document
            title : videoTitle,
            description,
            hashtags : Video.formatHashtags(hashtags)
        });
        /* 위의 코드와 같다. (데이터베이스에 저장)
        const video = new Video({ // document
        title : videoTitle,
        description,
        createdAt : Date.now(),
        hashtags : hashtags.split(",").map(word => `#${word}`),
        meta : {
            views : 0,
            rating : 0
        }
    }); 
    await video.save(); */
    } catch (error) {
        return res.render("upload", {pageTitle: "Upload Video", errorMessage : error._message});
    }
    
    return res.redirect("/");
}
export const remove = async (req, res) => {
    const {id} = req.params;
    await Video.findByIdAndDelete(id);
    return res.redirect("/");
}
export const search = async (req, res) => {
    const { keyword } = req.query;
    let videos = [];
    if (keyword) { // 실제로 검색한 경우
        videos = await Video.find({
            title : {
                $regex: new RegExp(keyword, "i")
            }
        });
    }
    return res.render("search", {pageTitle :"Search", videos});
}
