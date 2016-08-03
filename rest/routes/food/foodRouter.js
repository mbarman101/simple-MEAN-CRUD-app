var router = require('express').Router();
var Food = require('../../../rest/models/foods');

router.route('/findfoods')
	.post(function(req, res) {
		Food.find({
			'_id': {
				$in: req.body.foodIds
			}
		}, function(err, docs) {
			if (err) {
				res.send(err);
			}
			res.json({
				list: docs
			});
		});
	});

router.route('/')
	.get(function(req, res) {
		Food.find(function(err, foods) {
			if (err) {
				res.send(err);
			}
			res.json(foods);
		});
	});


router.route('/addFood')
	.post(function(req, res) {
		var food = new Food();
		food.foodName = req.body.foodName;
		food.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({
				message: 'Food Item Added'
			});
		});
	});

module.exports = router;