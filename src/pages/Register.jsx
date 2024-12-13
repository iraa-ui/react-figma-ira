import React from "react";
import "./../styles/register.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk validasi atau mengirim data ke backend di sini
    console.log("Form submitted:", formData);

    // Navigasi ke dashboard
    navigate("/dashboard");
  };

  return (
    <div className="register-wrapper">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Silahkan Daftar</h1>
        <div className="register-input-box">
          <input
            type="text"
            name="username"
            placeholder="Masukan Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register-input-box">
          <input
            type="text"
            name="email"
            placeholder="Masukan Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register-input-box">
          <input
            type="password"
            name="password"
            placeholder="Masukan Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-btn btn-dark">
          Daftar
        </button>
        <h4 className="register-footer-text">XI PPLG 2</h4>
      </form>
    </div>
  );
}

export default Register;
