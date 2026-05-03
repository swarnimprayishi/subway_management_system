const express = require("express");
const router = express.Router();

// simple test route
router.get("/", (req, res) => {
    res.json({ message: "Users API working" });
});

module.exports = router;
