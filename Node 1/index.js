const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./restaurant/routes/api_restaurant");


const restaurantRoutes = require("./restaurant/routes/api_restaurant");
const menuRoutes = require("./restaurant/routes/api_menu");
const mongodb = require("./config/mongodb");

mongodb.connect();

const server = express();
server.use(cors());
server.listen("3200");

bodyParser.json();

server.use(bodyParser.json());

server.use("/api/restaurant", restaurantRoutes);
erver.use("/api/menu", menuRoutes);

server.get("/",(req, res)=>{
    res.send("Hello");
})
//console.log("god");