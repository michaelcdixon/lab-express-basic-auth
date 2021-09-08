const router = require("express").Router();

function requiredLogin(req, res, next) {
	if (req.session.currentUser) {
		next();
	} else {
		res.redirect("/login");
	}
}

router.get("/cats", requiredLogin, (req, res) => {
	res.render("cats");
});

module.exports = router;
