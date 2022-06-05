

const mongodb = require("mongodb");

const url = "mongodb+srv://saiadithya:sri2928@cluster0.dov8s.mongodb.net/restaurantDB?retryWrites=true&w=majority";

const mongodbClient = mongodb.MongoClient;

var connectedClient;

exports.connect = ()=>{
    mongodbClient.connect(url)
    .then((client)=>{
        connectedClient=client;
        console.log("DB CONNECTED");
    })
    .catch(err=>{console.log(err)});
}

exports.getCollection = (nameOfCollection)=>{
    return connectedClient.db('restaurantDB').collection(nameOfCollection);
}