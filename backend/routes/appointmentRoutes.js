const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Test route
router.get("/test", (req, res) => {
    res.send("Appointment route working ✅");
});

// Book appointment
router.post("/book", (req, res) => {
    const { user_id, slot_id } = req.body;

    const checkSlotQuery = `
        SELECT available_slots
        FROM TIME_SLOT
        WHERE slot_id = ?
    `;

    db.query(checkSlotQuery, [slot_id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Slot not found"
            });
        }

        if (result[0].available_slots <= 0) {
            return res.status(400).json({
                message: "Slot Full ❌"
            });
        }

        const insertQuery = `
            INSERT INTO appointment (user_id, slot_id, status)
            VALUES (?, ?, 'Booked')
        `;

        db.query(insertQuery, [user_id, slot_id], (err) => {
            if (err) {
                return res.status(500).json(err);
            }

            const updateQuery = `
                UPDATE TIME_SLOT
                SET available_slots = available_slots - 1
                WHERE slot_id = ?
            `;

            db.query(updateQuery, [slot_id], (err) => {
                if (err) {
                    return res.status(500).json(err);
                }

                res.json({
                    message: "Appointment Booked Successfully ✅"
                });
            });
        });
    });
});

module.exports = router;