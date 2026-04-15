const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/add", (req, res) => {
    const { comments, rating, user_id } = req.body;

    const sql = `
        INSERT INTO FEEDBACK
        (comments, rating, user_id)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [comments, rating, user_id], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({
            message: "Feedback Added Successfully ✅"
        });
    });
});

module.exports = router;