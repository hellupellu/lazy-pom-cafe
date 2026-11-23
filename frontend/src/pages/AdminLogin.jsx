// Erza - Admin login
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { isAdminLoggedIn, loginAdmin } from "../utils/adminAuth";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (isAdminLoggedIn()) {
    return <Navigate to="/admin" replace />;
  }

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginAdmin(inputs.username, inputs.password)) {
      navigate("/admin");
    } else {
      setError("Wrong username or password");
    }
  };

  return (
    <section className="admin-login">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <img
          src="/lazypomlogo.png"
          alt="Lazy Pom Cafe"
          className="admin-login-logo"
        />

        <h1>Admin login</h1>

        <label htmlFor="username">
          Username
          <input
            id="username"
            name="username"
            autoComplete="username"
            value={inputs.username}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={inputs.password}
            onChange={handleChange}
            required
          />
        </label>

        {error && (
          <p role="alert" className="admin-login-error">
            {error}
          </p>
        )}

        <button type="submit" className="admin-login-button">
          Log in
        </button>
        <p className="admin-login-hint">Demo login: admin / admin123</p>
      </form>
    </section>
  );
};

export default AdminLogin;
