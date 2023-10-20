const express = require('express');
const router = express.Router();

const { userModel } = require('../models');

router.get('/devices', async (req,res) =>{
    const dataDevices = await userModel.findAll();

    return res.status(200)
    .json({
        message: "Berhasil mendapatkan data devices.",
        data: dataDevices
    });
})

router.get('/device/:id', async (req, res) => {
    const id = req.params.id;

    const dataDevices = await userModel.findOne({
        where: {
            id: id
        }
    })

    if (!dataDevices) {
        return res.status(404)
            .json({
                message: "Data device tidak ditemukan",
                data: {}
            })
    }

    return res.status(200)
        .json({
            message: "Berhasil mendapatkan data device",
            data: dataDevices
        });
}) 

router.post('/device', async (req, res) => {
    const { name, location, type, sensor_spesification, gps_location_longitude, gps_location_latitude, device_notification } = req.body;

    const createDevices= await userModel.create({
        name: name,
        location: location,
        type: type,
        sensor_spesification: sensor_spesification,
        gps_location_longitude: gps_location_longitude,
        gps_location_latitude: gps_location_latitude,
        device_notification: device_notification
    });

    if (!createDevices) {
        return res.status(400)
            .json({
                message: "Gagal menambahkan data devices",
                data: {}
            })
    }

    return res.status(201)
        .json({
            message: "Berhasil menambahkan data devices",
            data: createDevices
        })
})

router.put('/device/:id', async (req, res) => {
    const id = req.params.id;

    const { name, location, type, sensor_spesification, gps_location_longitude, gps_location_latitude, device_notification } = req.body;

    const updateDevice = await userModel.update({
        name: name,
        location: location,
        type: type,
        sensor_spesification: sensor_spesification,
        gps_location_longitude: gps_location_longitude,
        gps_location_latitude: gps_location_latitude,
        device_notification: device_notification
    }, {
        where: {
            id: id
        }
    })

    if (!updateDevice) {
        return res.status(400)
            .json({
                message: "Gagal ubah data Device",
                data: {}
            })
    }

    const dataDevices = await userModel.findOne({
        where: {
            id: id
        }
    })

    return res.status(200)
        .json({
            message: "Berhasil ubah data device",
            data: dataDevices
        })
})

router.delete('/device/:id', async (req, res) => {
    const id = req.params.id;

    const deleteDevice = await userModel.destroy({
        where: {
            id: id
        }
    })

    if (!deleteDevice) {
        return res.status(400)
            .json({
                message: "Gagal hapus data device",
                data: {}
            })
    }

    return res.status(200)
        .json({
            message: "Berhasil hapus data device",
            data: {}
        })
}) 

module.exports = router;