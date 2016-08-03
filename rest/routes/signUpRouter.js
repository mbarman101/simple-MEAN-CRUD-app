var router = require('express').Router();
var User = require('../../rest/models/user');

router.route('/')
	.post(function(req, res) {
		var user = new User();
		user.email = req.body.email;
		user.passWord = req.body.passWord;

		user.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({
				message: 'User Created!'
			});
		});
	});

module.exports = router;