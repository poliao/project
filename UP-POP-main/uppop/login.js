document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.createElement('form');
    loginForm.id = 'login-form';
    document.body.appendChild(loginForm);
    
  
    loginForm.addEventListener('submit', async (e) => {
        
       
      e.preventDefault();
  
      // รับข้อมูลจากฟอร์ม
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
  
      try {
        const response = await fetch('http://localhost:8000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
            
          }),
        });
  
        if (response.status === 200) {
          // ล็อกอินสำเร็จ
          console.log('ล็อกอินสำเร็จ');
        } else {
          // ล็อกอินไม่สำเร็จ
          console.error('ล็อกอินไม่สำเร็จ');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการล็อกอิน:', error);
      }
    });
  });
  