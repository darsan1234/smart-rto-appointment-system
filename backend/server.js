const express = require("express");

const userRoutes = require("./routes/userRoutes");
const slotRoutes = require("./routes/slotRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

// Middleware to read JSON body
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("RTO Backend Running 🚀");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/feedback", feedbackRoutes);

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});