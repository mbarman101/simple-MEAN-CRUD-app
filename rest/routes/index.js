module.exports = function(app) {

	/**
	* routing for user login and sign up
	*/
    app.use('/api/login', require('../../rest/routes/loginRouter'));
    app.use('/api/signUp', require('../../rest/routes/signUpRouter'));
    app.use('/api/foods', require('../../rest/routes/food/foodRouter'));
    app.use('/api/cooks', require('../../rest/routes/cook/cookRouter'));
}
