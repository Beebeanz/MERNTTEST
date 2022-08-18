//connect to database
const { MongoClient } = require("mongodb");
const DB = process.env.ATLAS_URI;
const client = new MongoClient(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err,db) {
            // Verify we got a good "db" object
            if (db)
            {
                _db = db.db("employees");
                console.log("Successfully connected to MonogDb.");
            }
            return callback(err);
        });
    },
    getDB: function (){
        return_db;
    },
};