const express = require('express');
const app = express();
const db = require('./models');

const userRoute = require('./routes/user.route');

app.use(express.json());

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Koneksi ke database berhasil.');
    })
    .catch(err => {
        console.log('Gagal koneksi ke database: ', err);
    })



app.get('/', (req, res) => {
    return res.status(200)
        .json({
            message: "Selamat datang di aplikasi Node.js + Express.js + Sequelize ORM + MySQL"
        })
});

app.use(userRoute);

const port = 8000;

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
})