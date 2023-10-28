'use strict'
const db = require("../../models")
const Charge = db.charge
const axios = require('axios')
const {request} = require("axios");

module.exports = {
    transaction (req, res) {
        let requestData = req.body

        const options = {
            'method': 'POST',
            'url': 'http://localhost:8000/api/transaction',
            'headers': {
                'Content-type': 'application/json'
            },
            data: {
                gasolineTankId: requestData.gasoline_tank_id,
                amount: requestData.amount,
                clientName: requestData.client_name,
                paymentType: requestData.payment_type,
            }
        }
    }
}