const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/add", (req, res) => {
    const {
        service_name,
        description,
        required_documents,
        fees,
        processing_time,
        created_by
    } = req.body;

    const sql = `
        INSERT INTO RTO_SERVICE
        (service_name, description, required_documents, fees, processing_time, created_by)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql,
        [service_name, description, required_documents, fees, processing_time, created_by],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: "Service Added Successfully ✅"
            });
        }
    );
});

module.exports = router;