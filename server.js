var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'app')));

    var server = app.listen(process.env.PORT || 5000), function() {
        var port = server.address().port;
        console.log("Express is working on port " + port);
});