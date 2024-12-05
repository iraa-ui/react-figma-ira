import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import ikon
import { Link } from 'react-router-dom'; 
import "./../styles/dashboard.css";

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const dataAbsensi = [
    "Andra Alfairuz Medani",
    "Ayyas",
    "Ezra",
    "Fadli.M",
    "Haifazahra",
    "Ibnu",
    "Ira",
    "Mitha",
    "M.Fadli fauzi",
    "M.gilang",
    "Muzakki",
    "Rafli",
    "Rasya",
    "Reifal",
    "Ridwan",
    "Rijal",
    "Satria",
    "Sendy",
    "Sulthan",
    "Zaenal",
    "Fajar",
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar navbar-expand-lg">
        <h2>Dashboard</h2>
        <button onClick={handleMenuToggle} className="navbar-toggler">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
            <li><Link to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
            <li><Link to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link></li>
            <li><Link to="/register"><FontAwesomeIcon icon={faUserPlus} /> Register</Link></li>
            <li><Link to="/home"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li> {/* Logout menuju ke /home */}
          </ul>
        </div>
      </nav>

      <div className="dashboard-table-container">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama</th>
            </tr>
          </thead>
          <tbody>
            {dataAbsensi.map((nama, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{nama}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
