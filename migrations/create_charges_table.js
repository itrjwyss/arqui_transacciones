'use strict';
const {Sequelize} = require("sequelize");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('charges', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            quantity_sold: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            discount: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            transaction_date: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            transaction_hour: {
                type: Sequelize.TIME,
                allowNull: false
            },
            payment_type: {
                type: Sequelize.STRING,
                allowNull: false,
                length: 20
            },
            employee_code: {
                type: Sequelize.STRING,
                allowNull: false,
                length: 20
            },
            service_station_id: {
                type: Sequelize.Integer,
                allowNull: false
            },
            client_id: {
                type: Sequelize.Integer,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('charges')
    }
}