const mongoose = require("mongoose");
require("dotenv").config();

// const { MONGODB_URL } = process.env;
const MONGODB_URL = "mongodb://localhost:27017/ecommerce";

exports.connect = () => {
    mongoose
        .connect("mongodb://<username>:<password>@container-name>:27017/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(console.log(`DB Connection Success`))
        .catch((err) => {
            console.log(`DB Connection Failed`);
            console.log(err);
            process.exit(1);
        });
};
