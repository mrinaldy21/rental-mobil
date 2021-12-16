const { car, image } = require("../models");
const path = require("path");
const baseUrl = 'localhost:3001'

class CarController {
  static async getCars(req, res) {
    try {
      const { id } = req.params;
      let cars = await car.findAll({
        order: [["id", "ASC"]],
        include: [
          image
        ]
      });
      

      res.status(200).json(cars);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async addCar(req, res) {
    try {
      const {
        name,
        harga_sewa,
        penumpang,
        bagasi,
        pintu,
        ac,
        type,
        deskripsi,
      } = req.body;

      const fileImage = req.file;

      console.log('masukkk', fileImage)

      if (!fileImage) {
        res.status(400).json("Need upload image");
      }

      let cars = await car.create({
        name,
        harga_sewa,
        penumpang,
        bagasi,
        pintu,
        ac,
        type,
        deskripsi,
      });
      const dataImage = await image.create({
        filename: fileImage.filename,
        filesize: fileImage.size,
        filetype: path.extname(fileImage.filename),
        path: `${baseUrl}/images/${fileImage.filename}`,
        primary: true,
        carId: cars.id,
      });

      res.status(201).json({ ...cars.dataValues, image: `${baseUrl}/images/${dataImage.filename}` });
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async getSinglePage(req, res) {
    try {
      const id = +req.params.id;
      let cars = await car.findOne({
        where: {
          id,
        },
      });
      res.status(201).json(cars);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async editCar(req, res) {
    try {
      const id = +req.params.id;
      const {
        name,
        harga_sewa,
        penumpang,
        bagasi,
        pintu,
        ac,
        type,
        deskripsi,
      } = req.body;

      // const image = req.file;

      // if (!image) {
      //   res.status(400).json("Need upload image");
      // }

      let cars = await car.update(
        { name, harga_sewa, penumpang, bagasi, pintu, ac, type, deskripsi },
        { where: { id } }
      );
      // const dataImage = await image.create({
      //   filename: fileImage.filename,
      //   filesize: fileImage.size,
      //   filetype: path.extname(fileImage.filename),
      //   path: `${baseUrl}/images/${fileImage.filename}`,
      //   primary: true,
      //   carId: cars.id,
      // });
      res.status(201).json(cars);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async deleteCar(req, res) {
    try {
      const id = +req.params.id;
      let cars = await car.destroy({ where: { id } });
      res.status(201).json(cars);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = CarController;
