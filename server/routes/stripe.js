const { Router } = require('express');
const stripeRoute = Router();

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

stripeRoute.post("/payment", async (req, res) => {
  try {
    //webdevsimp
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.cars.map((item) => {
        const price = Number(String(item.harga_sewa) + "00");

        return {
          price_data: {
            currency: "IDR",
            product_data: {
              name: item.name,
            },
            unit_amount: price,
          },
          quantity: 1,
        };
      }),
      success_url: `${process.env.FRONTEND_URL}/reservasi`,
      cancel_url: `${process.env.FRONTEND_URL}/cart`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

module.exports = stripeRoute;