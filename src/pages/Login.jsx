import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/login.css'; // Pastikan file CSS ini benar
import background from '/assets/img/bg1.jpg'; // Path harus sesuai dengan struktur proyek Anda

const Login = () => {
  const handleLogin = () => {
    window.location.href = '/dashboard'; // Navigasi ke dashboard
  };

  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="login-page">
        <form>
          <h1>Silahkan Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Masukan Email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Masukan Password" required />
          </div>
          <button type="button" className="btn btn-dark" onClick={handleLogin}>
            Log in
          </button>
          <div className="register-link">
            <p>Don't have an account?</p>
            <a href="/Register">Register</a>
          </div>
          <h4>XI PPLG 2</h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
