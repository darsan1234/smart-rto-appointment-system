const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/create", (req, res) => {
    const sql = `
        INSERT INTO TIME_SLOT
        (slot_date, start_time, end_time, max_capacity, available_slots, service_id)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
        "2026-04-16",
        "10:00:00",
        "11:00:00",
        5,
        5,
        null
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        res.json({
            message: "Slot Created Successfully ✅",
            slot_id: result.insertId
        });
    });
});

module.exports = router;