export const trending = (req, res) => res.render("home", {pageTitle : "Home"}); // controller
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const remove = (req, res) => res.send("Remove Video");