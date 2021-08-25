let videos = [
    {
        title:"First Video",
        rating : 5,
        comments : 2,
        createdAt : "2 minutes ago",
        views : 59,
        id : 1
    },
    {
        title:"Second Video",
        rating : 5,
        comments : 2,
        createdAt : "2 minutes ago",
        views : 59,
        id : 2
    },
    {
        title:"Third Video",
        rating : 5,
        comments : 2,
        createdAt : "2 minutes ago",
        views : 1,
        id : 3
    }
];
export const trending = (req, res) => {
    return res.render("home", {pageTitle : "Home", videos}); // controller
}
export const watch = (req, res) => {
    const id = req.params.id; // const {id} = req.params;
    const video = videos[id-1];
    res.render("watch", {pageTitle : `Watch : ${video.title}`, video});
}
export const edit = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    res.render("edit", {pageTitle : `Edit : ${video.title}`, video});
}
export const postEdit = (req, res) => {
    const id = req.params.id;
    const {title} = req.body;
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
}
export const postUpload = (req, res) => {
    // console.log(req.body);
    const newVideo = {
        title:req.body.videoTitle,
        rating : 0,
        comments : 0,
        createdAt : "Just now",
        views : 0,
        id : videos.length + 1
    };
    videos.push(newVideo);
    return res.redirect("/");
}

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const remove = (req, res) => res.send("Remove Video");
