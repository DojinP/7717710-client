import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/RegisterPage.css';

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    // 회원가입 요청을 보내는 코드를 여기에 작성합니다.
    // 예를 들면, 아래와 같은 형태일 수 있습니다.
    /*
    if (password !== confirmPassword) {
      // 비밀번호와 비밀번호 확인이 일치하지 않을 때의 처리를 작성합니다.
    } else {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      if (response.ok) {
        // 회원가입 성공
      } else {
        // 회원가입 실패
      }
    }
    */
  };

  return (
    <div className="RegisterPage">
      <Header/>
      <div className="RegisterContainer">
        <div className="RegisterContent">
        <section name="RegisterFormSection">
          <h2>회원가입</h2>
          <form onSubmit={handleRegister}>
            <label>
              아이디:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              비밀번호:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
              비밀번호 확인:
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <input type="submit" value="회원가입" />
          </form>
        </section>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default RegisterPage;
