const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password` ) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("MySQL error:", err);
            return res.status(500).json({ error: "Internal Server Error", message: err.message });
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    const values = [
        req.body.email,
        req.body.password
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("MySQL error:", err);
            return res.status(500).json({ error: "Internal Server Error", message: err.message });
        }
        if(data.length > 0) {
            return res.json("Success");

        } else {
            return res.json("Failed");
        }
        return res.json(data);
    }); 
});



app.listen(8081, () => {
    console.log("listening");
});
