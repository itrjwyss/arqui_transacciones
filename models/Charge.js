'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class charge extends Model { }
    charge.init({
        quantity_sold: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        discount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        transaction_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        transaction_hour: {
            type: DataTypes.TIME,
            allowNull: false
        },
        payment_type: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 20
        },
        employee_code: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 20
        },
        service_station_id: {
            type: DataTypes.Integer,
            allowNull: false
        },
        client_id: {
            type: DataTypes.Integer,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'charge',
    })
    return charge;
}