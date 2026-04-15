const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/pay", (req, res) => {
    const { amount, payment_method, appointment_id } = req.body;

    const sql = `
        INSERT INTO PAYMENT
        (amount, payment_method, payment_status, appointment_id)
        VALUES (?, ?, 'Paid', ?)
    `;

    db.query(sql, [amount, payment_method, appointment_id], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({
            message: "Payment Successful ✅"
        });
    });
});

module.exports = router;