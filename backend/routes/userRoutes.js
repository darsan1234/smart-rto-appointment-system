const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/register", (req, res) => {
    const { name, email, password, phone, address } = req.body;

    const sql = `
        INSERT INTO USER (name, email, password, phone, address)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, password, phone, address],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "User Registered Successfully ✅"
            });
        }
    );
});

module.exports = router;