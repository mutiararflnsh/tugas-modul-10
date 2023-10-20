module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('devices', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: 'name_UNIQUE',
          },
          location: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          type: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          sensor_spesification: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          gps_location_longitude: {
            type: Sequelize.DECIMAL(10),
            allowNull: true,
          },
          gps_location_latitude: {
            type: Sequelize.DECIMAL(10),
            allowNull: true,
          },
          device_notification: {
            type: Sequelize.TINYINT,
            allowNull: true,
          }
    });

    return User;
}