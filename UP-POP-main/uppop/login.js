// login.js

const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'up pop'
};

// สร้างการเชื่อมต่อกับ MySQL
const connection = mysql.createConnection(dbConfig);

// เรียกใช้การเชื่อมต่อ
connection.connect((err) => {
    if (err) {
        console.error('เกิดข้อผิดพลาดในการเชื่อมต่อกับ MySQL:', err);
    } else {
        console.log('เชื่อมต่อกับ MySQL สำเร็จ');
        // คุณสามารถเรียกใช้คำสั่ง SQL และดำเนินการกับฐานข้อมูลได้ที่นี่
    }
});

// ฟังก์ชันเพื่อตรวจสอบข้อมูลการเข้าสู่ระบบ
function performLogin() {
    // ตรวจสอบความถูกต้องของข้อมูลที่รับมา (นี่คือตัวอย่างแบบเบื้องต้น)
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    if (username === "" || password === "") {
        alert("โปรดกรอกชื่อผู้ใช้และรหัสผ่าน");
        return;
    }

    // สร้างคำสั่ง SQL สำหรับค้นหาผู้ใช้ในฐานข้อมูล
    const sqlQuery = `SELECT * FROM user WHERE username = ? AND password = ?`;

    // ทำการค้นหาในฐานข้อมูล
    connection.query(sqlQuery, [username, password], (err, results) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการค้นหาในฐานข้อมูล:', err);
            return;
        }

        if (results.length > 0) {
            alert("เข้าสู่ระบบสำเร็จ");
            // ทำอะไรก็ตามหลังจากเข้าสู่ระบบสำเร็จ เช่น นำผู้ใช้ไปยังหน้าอื่น ๆ
        } else {
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        }
    });
}
