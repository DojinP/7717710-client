import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    // 로그인 요청을 보내는 코드를 여기에 작성합니다.
    // 예를 들면, 아래와 같은 형태일 수 있습니다.
    /*
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    
    if (response.ok) {
      // 로그인 성공
    } else {
      // 로그인 실패
    }
    */
  };

  return (
    <div className="LoginPage">
      <Header/>
      <div className="LoginContainer">
        <div className="LoginContent">
          <section name="LoginFormSection">
          <h2>로그인</h2>
            <form onSubmit={handleLogin}>
              <label>
                아이디:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <label>
                비밀번호:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <input type="submit" value="로그인" />
            </form>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LoginPage;