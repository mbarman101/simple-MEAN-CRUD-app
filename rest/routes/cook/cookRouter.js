var router = require('express').Router();
var Cook = require('../../../rest/models/cooks');

router.route('/')
	.get(function(req, res) {
		Cook.find(function(err, cooks) {
			if (err) {
				res.send(err);
			}
			res.json(cooks);
		});
	});


router.route('/addcook')
	.post(function(req, res) {
		var cook = new Cook();
		cook.name = req.body.name;
		//cook.fooditem_ids = req.body.fooditem_ids ;
		cook.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({
				message: 'Cook Added'
			});
		});
	});

router.route('/deleteCook/:cookId')
	.delete(function(req, res) {
		Cook.remove({
			_id: req.params.cookId
		}, function(err, cook) {
			if (err) {
				res.send(err);
			} else {
				res.json({
					message: 'Successfully deleted'
				});
			}
		});
	});

module.exports = router;