require("dotenv").config()

const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest:'images/'})



app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/images', express.static('images'))

const route = require("./routes");
app.use(route);

const fileStorage =  multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '_' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
        ){
            cb(null, true);
        } else {
            cb(null, false);
        }
}

app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
})