const yelp = require('yelp-fusion'); 
const path = require('path'); 
const dotenv = require('dotenv'); 

dotenv.config({path: './config.env'}); 
const client = yelp.client(process.env.API_KEY);

exports.getHome = async (req, res, next) => {
    res.sendFile(path.join(__dirname, './src/build/index.html'));

    console.log("Home page activated!");
    res.status(200).json({
        status: "Home page: success"
    });
};

exports.newFoodPost = async(req, res, next) => {
    res.sendFile(path.join(__dirname, './src/build/newFoodPost.html'));

    console.log("Home page activated!");
    res.status(200).json({
        status: "Home page: success"
    });
};

//This section is done in order to get the searches from the user when the post request is used
exports.getFoodShops = async(req, res, next) => {
    try{
        console.log("Page activated");
        const result = await client.search({
            term: 'hot dog',
            longitude: req.query.longitude,
            latitude: req.query.latitude 
        });
    } catch (err) {
        res.status(404).json({
            status: "ERROR",
            message: err
        })
    }
}
