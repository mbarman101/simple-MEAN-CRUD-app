var router = require('express').Router();
var User = require('../../rest/models/user');

router.route('/:userName')
	.get(function(req, res) {
		User.find({
			"email": req.params.userName
		}, function(err, user) {
			if (err)
				res.send(err);
			res.json(user);
		});

	});
module.exports = router;