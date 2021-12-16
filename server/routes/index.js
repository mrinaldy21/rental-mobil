const { Router } = require("express");
const route = Router();

route.get("/", (req, res) => {
    res.json({
      message: "Home Page",
    });
});

const userRoute = require("./user");
const carRoute = require("./car");
const cartRoute = require("./cart");
// const orderRoute = require("./order");
const stripeRoute = require("./stripe");
route.use("/stripe", stripeRoute);
route.use("/", userRoute);
route.use("/cars", carRoute);
route.use("/carts", cartRoute);
// route.use("/orders", orderRoute);

module.exports = route