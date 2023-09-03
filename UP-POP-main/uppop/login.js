app.post('/user' , async(req, res) => {
    try {
        const conn =  await mysql.createConnection(dbConfig);
        const [data] = await conn.query(
            "INSERT INTO user (id_user, fristname, lastname, username, faculfy, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
             [
              moment().format('DDMMYYYYhhmmss'), // รหัสสมาชิก (timestamp)
              req.body.fristname,
              req.body.lastname,
              req.body.username,
              req.body.faculfy,
              req.body.email,
              req.body.password,
            ]
        );
        conn.end(); 
        res.json({
            "message": "บันทึกข้อมูลสำเร็จแล้ว",
            "id": data.insertId,
            "data": req.body
        });
    } catch (error) {
        console.error(error); // แสดงข้อผิดพลาดในเซิร์ฟเวอร์
        res.status(500).json({"message": "Internal Server Error"});

    }
});

app.put('/users/:id' , async(req, res) => { 
    try {
        const conn = await mysql.createConnection(dbConfig);  
        const [data] = await conn.query("UPDATE user SET first_name = ?, last_name = ?, tel = ? ,address = ? , gender = ? , email = ? WHERE id = ?",
        [
            req.body.first_name,
            req.body.last_name,
            req.body.tel,
            req.body.address,
            req.body.gender,
            req.body.email,
            req.params.id
        ]);
        conn.end();
        res.json({
            "message": "แก้ไขข้อมูลสำเร็จแล้ว",
            "id": req.params.id,
            "data": req.body
        });
    } catch (error) {
        console.error(error); // แสดงข้อผิดพลาดในเซิร์ฟเวอร์
        res.status(500).json({"message": "Internal Server Error"});
    }
});
