document.addEventListener("DOMContentLoaded", function() {
    // เมื่อ DOM โหลดเสร็จแล้วจะทำงานที่นี่

    // สร้างฟังก์ชันเมื่อฟอร์มถูกส่ง
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // ป้องกันฟอร์มให้ทำการรีโหลดหน้าเว็บ

        // รับค่า username และ password จากฟอร์ม
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // สร้างข้อมูล JSON ที่จะส่งไปยังเซิร์ฟเวอร์
        const data = {
            username: username,
            password: password
        };

        // ใช้ Fetch API เพื่อส่งข้อมูลไปยังเซิร์ฟเวอร์
        fetch("/login-endpoint", {
            method: "POST", // หรือ "GET" ตามที่คุณต้องการใช้งาน
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json()) // แปลงคำตอบเป็น JSON
        .then(response => {
            // ตรวจสอบค่า response.success และแสดงข้อความที่เหมาะสม
            if (response.success) {
                document.getElementById("loginMessage").textContent = response.message;
            } else {
                document.getElementById("loginMessage").textContent = response.message;
                // สามารถใส่โค้ดเพิ่มเติมที่นี่เช่น ล้างค่า input หรือทำอย่างอื่นตามต้องการ
            }
        })
        .catch(error => {
            console.error("เกิดข้อผิดพลาดในการส่งคำขอ:", error);
        });
    });
});
