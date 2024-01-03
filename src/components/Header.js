import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul className="auth">
          <li><a href="/login">로그인</a></li>
          <li><a href="/register">회원가입</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;