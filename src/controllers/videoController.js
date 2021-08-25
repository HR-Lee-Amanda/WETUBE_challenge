import Video from "../models/video";

export const trending = async(req, res) => {
    const videos = await Video.find({});
    return res.render("home", {pageTitle : "Home", videos}); // controller
}
export const watch = (req, res) => {
    const id = req.params.id; // const {id} = req.params;
    res.render("watch", {pageTitle : `Watch : `});
}
export const edit = (req, res) => {
    const id = req.params.id;
    res.render("edit", {pageTitle : `Edit : `});
}
export const postEdit = (req, res) => {
    const id = req.params.id;
    const {title} = req.body;
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
}
export const postUpload = async (req, res) => {
    // console.log(req.body);
    const {videoTitle, description, hashtags} = req.body;
    await Video.create({ // document
        title : videoTitle,
        description,
        createdAt : Date.now(),
        hashtags : hashtags.split(",").map(word => `#${word}`),
        meta : {
            views : 0,
            rating : 0
        }
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
    
    return res.redirect("/");
}
