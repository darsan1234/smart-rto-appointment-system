const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/add", (req, res) => {
    const { name, email, password, phone_no } = req.body;

    const sql = `
        INSERT INTO ADMIN (name, email, password, phone_no)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, password, phone_no], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({
            message: "Admin Added Successfully ✅"
        });
    });
});

module.exports = router;