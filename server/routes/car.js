const { Router } = require('express');
const multer = require('multer');
const carRoute = Router();
const CarController = require('../controllers/CarController');
const moment = require('moment')

const fileStorage =  multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './images/');
  },
  filename: (req, file, cb) => {
      cb(null, moment().format('DD-MM-YYYY_hh-mm') + '_' + file.originalname)
  }
})

const upload = multer({storage: fileStorage})


carRoute.get("/", CarController.getCars);
carRoute.get("/:id", CarController.getSinglePage);
carRoute.post("/add", upload.single('image'), CarController.addCar);
carRoute.post("/edit/:id", upload.single('image'), CarController.editCar);
carRoute.delete("/delete/:id", CarController.deleteCar);


module.exports = carRoute