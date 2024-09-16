import { useState } from "react";
import axios from "axios";
import './App.css';

const AuthPage = (props) => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/authenticate", { username })
      .then((r) => props.onAuth({ ...r.data, secret: username })) // NOTE: over-ride secret
      .catch((error) => {
        console.error('Error:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 🤝</div>
        <div className="form-subtitle">Set a Username to continue</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            type="text"
            className="auth-input"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="auth-button" type="submit">Enter</button>
        </div>
      </form>
    </div> 
  );
};

export default AuthPage;
