var NewSchema = require('../app/models/schemaModel.js')

function getUser (req, res){
	if (req.body.username){
		User.findOne({ username : req.body.username})
				res.send(doc)
			}
	}

module.exports = {
	getSchema	: getSchema
}