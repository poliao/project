const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const port = 5500;

app.use(cors());

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "up pop"
}

app.use(bodyParser.json());

app.post('/login-endpoint', async (req, res) => {
    const { username, password } = req.body;

    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM user WHERE username = ?', [username]);
        connection.end();

        if (rows.length === 0 || rows[0].password !== password) {
            res.status(401).json({ success: false, message: 'รหัสผ่านไม่ถูกต้อง' });
        } else {
            res.json({ success: true, message: 'เข้าสู่ระบบสำเร็จ' });
        }
    } catch (error) {
        console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับฐานข้อมูล:", error);
        res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดในการตรวจสอบการเข้าสู่ระบบ' });
    }
});

app.post('/users', async (req, res) => {
    try {
        const conn = await mysql.createConnection(dbConfig);
        const [data] = await conn.query(
            "INSERT INTO user (id_user, username, fristname, lastname, faculfy, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [
                req.body.id_user,
                req.body.username,
                req.body.fristname,
                req.body.lastname,
                req.body.faculfy,
                req.body.email,
                req.body.password
            ])
        conn.end();
        res.json({
            "message": "บันทึกข้อมูลสำเร็จแล้ว",
            "id": data.insertId,
            "data": req.body
        });
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
});

app.listen(port, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานที่พอร์ต ${port}`);
});
