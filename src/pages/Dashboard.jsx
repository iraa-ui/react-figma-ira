import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./../styles/dashboard.css";

function Dashboard() {
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
    // Logika untuk toggle menu bisa ditambahkan di sini
    console.log('Menu toggled');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar navbar-expand-lg">
        <h2>Dashboard</h2>
        <button onClick={handleMenuToggle} className="navbar-toggler">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <h2>Data Absensi</h2>
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
  );
}

export default Dashboard;
