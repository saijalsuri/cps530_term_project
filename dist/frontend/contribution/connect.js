const mongo = require('mongodb').MongoClient;
function doConnect() {
 	var url = 'mongodb:/admin:givemeaccess01@ds113849.mlab.com:13849/mydb';
	mongo.connect(url, (err, db) => {
		if(err) { 
			console.log(err);
		} else {
			alert("Successfully saved comment in database!");
		}
	})
}
doConnect();