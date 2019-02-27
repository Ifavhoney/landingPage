module.exports.displayHome = function(req, res, next) {
  res.render("index", { title: "Home" });
};
module.exports.displayAbout = function(req, res, next) {
  res.render("index", { title: "About Me" });
};
module.exports.displayProjects = function(req, res, next) {
  res.render("index", { title: "My Projects" });
};
module.exports.displayServices = function(req, res, next) {
  res.render("index", { title: "My Services" });
};
module.exports.displayContact = function(req, res, next) {
  res.render("contactPage", { title: "Contact Me Here!" });
};
module.exports.postContact = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};
