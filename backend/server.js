const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Ring4U działa");
});

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Połączenie React ↔ Node działa!"
    });
});

app.listen(5000, () => {
    console.log("Serwer działa na porcie 5000");
});