import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css'; // Pastikan file CSS ini benar
import background from '/assets/img/bg2.jpg'; // Path harus sesuai dengan struktur proyek Anda

const Register = () => {
  const handleRegister = () => {
    window.location.href = '/dashboard'; // Navigasi ke dashboard
  };

  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="register-page">
        <form>
          <h1>Silahkan Register</h1>
          <div className="input-box">
            <input type="email" placeholder="Masukan Username" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Masukan Email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Masukan Password" required />
          </div>
          <button type="button" className="btn btn-dark" onClick={handleRegister}>
            Register
          </button>
          <div className="register-link">
            <p>Already have an account?</p>
            <Link to="/Login">Login</Link>
          </div>
          <h4>XI PPLG 2</h4>
        </form>
      </div>
    </div>
  );
};

export default Register;
