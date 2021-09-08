const router = require("express").Router();

function requiredLogin(req, res, next) {
	if (req.session.currentUser) {
		next();
	} else {
		res.redirect("/login");
	}
}

router.get("/dogs", requiredLogin, (req, res) => {
	res.render("dogs");
});

module.exports = router;
