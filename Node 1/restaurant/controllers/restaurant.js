
const Restaurant = require("../models/restaurant");
const repo = require("../repositories/restaurant");

const url =require("url");

exports.addRestaurant = (req, res) =>{
    console.log(req.body);
    const newRestaurant = new Restaurant(null, req.body.name,
         req.body.location, req.body.website, req.body.phone);
    repo.add(newRestaurant, ()=>{
        res.send("Data added");
    })
    
}


exports.updateRestaurant = (req, res) =>{
    console.log(req.body);
    const restaurantToUpdate = new Restaurant(req.body._id, req.body.name,
         req.body.location, req.body.website, req.body.phone);
    repo.updateRestaurant(restaurantToUpdate, ()=>{
        res.send("Data updated");
        repo.getById(restaurantToUpdate.id, (restaurant)=>{
            res.send(restaurant);
        })
    })
    
}



exports.getRestaurant = (req, res) =>{
    repo.getAll((restaurants)=>{
        res.send(restaurants);
    })
}

exports.getRestaurantByID = (req, res) =>{
    const id = req.params.id;
    console.log(id);
    repo.getById(id, (restaurant)=>{
        res.send(restaurant);
    })
}

exports.getRestaurantByLocation = (req, res) =>{
    const loc = req.params.loc;
    console.log(loc);
    repo.getByLocation(loc, (restaurant)=>{
        res.send(restaurant);
    })
}

exports.searchRestaurant = (req, res) =>{
    const key = req.params.key;
    console.log(key);
    repo.search(key, (restaurants)=>{
        res.send(restaurants);
    })
}


exports.deleteRestaurant = (req, res)=>{
    const id = req.params.id;
    repo.deleterestaurant(id, ()=>{
        res.send("restaurant deleted");
    })
}

exports.filterRestaurant = (req, res)=>{
    const params = url.parse(req.url, true).query;
   // console.log(params);
       if(!params.name) {
            repo.getByLocation(params.location, (restaurants)=>{
            res.send(restaurants);
          }); }
    repo.filterRestaurant(params.location, params.name, (result)=>{
        res.send(result);
    });
}