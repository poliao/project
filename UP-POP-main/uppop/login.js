// ฟังก์ชันเพื่อตรวจสอบข้อมูลการเข้าสู่ระบบ
function performLogin() {
    // ตรวจสอบความถูกต้องของข้อมูลที่รับมา (นี่คือตัวอย่างแบบเบื้องต้น)
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    if (username === "" || password === "") {
        alert("โปรดกรอกชื่อผู้ใช้และรหัสผ่าน");
        return;
    }

    // ทำการค้นหาในฐานข้อมูลผ่านการร้องขอไปยังเซิร์ฟเวอร์
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("เข้าสู่ระบบสำเร็จ");
            // ทำอะไรก็ตามหลังจากเข้าสู่ระบบสำเร็จ เช่น นำผู้ใช้ไปยังหน้าอื่น ๆ
        } else {
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        }
    })
    .catch(error => {
        console.error('เกิดข้อผิดพลาดในการร้องขอไปยังเซิร์ฟเวอร์:', error);
    });
}
