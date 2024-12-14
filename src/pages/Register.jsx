import React from "react";
import "../styles/register.css";
import background from "/assets/img/bg2.jpg";

const Register = () => {
  

  const handleLogin = () => {
    window.location.href = "/dashboard"; // Fungsi untuk navigasi
  };

  return (
    <div className="background-register">
      <div className="wrapper">
        <div className="register-page">
          <form>
            <h1>Silahkan Register</h1>
            <div className="input-box">
              <input type="text" placeholder="Masukan Username" required />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Masukan Email" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Masukan Password" required />
            </div>
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleLogin}
            >
              Register
            </button>
            <h4>XI PPLG 2</h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
