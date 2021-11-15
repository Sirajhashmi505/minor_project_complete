const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("./models/user");

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const ownerRoutes = require("./routes/owner");
const userRoutes = require("./routes/auth");
const reviewRoutes = require("./routes/review");
const addressRoutes = require("./routes/address");
const paymentRoutes = require("./routes/payment");
const orderRoutes = require("./routes/order");

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);
app.use("/api", userRoutes);
app.use("/api", reviewRoutes);
app.use("/api", addressRoutes);
app.use("/api", paymentRoutes);
app.use("/api", orderRoutes);
mongoose.connect("mongodb+srv://root:test123@cluster0.kweyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Conneted to database ");
        }
    });

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("succesfully working on the local host dont worry");
});