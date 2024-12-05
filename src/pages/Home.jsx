import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/home.css'; 
import logo from '/assets/img/logo.png'; 

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar navbar-expand-lg">
        <img src={logo} alt="Logo" />
        <h2 className="text-nowrap">Smk Prakarya Internasional</h2>
        <div className="container-fluid">
          <Link to="/login"> 
            <button type="button" className="btn btn-dark">
              Log in
            </button>
          </Link>
        </div>
      </nav>
      
      
      <div className="home-page">
        <div className="container pt-5">
          <div className="d-flex justify-content-center align-items-center mt-5">
            <h1 className="h1-container">ABSENSI XI PPLG 2</h1>
          </div>
        </div>
       
        <div className="yow">
          <p>
            halo semuanya jadi disini web ini digunakan <br />
            untuk mengabsen kehadiran murid <br />
            tapi, web ini hanya digunakan khusus <br />
            untuk kelas xi pplg 2 yahh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
