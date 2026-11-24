import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [saved, setSaved] = useState(null);

  const [lEmail, setLEmail] = useState("");
  const [lPass, setLPass] = useState("");
  const [msg, setMsg] = useState("");

  const handleReg = (e) => {
    e.preventDefault();
    setSaved({ name, email, pass });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (saved && lEmail === saved.email && lPass === saved.pass) {
      setMsg("Login Successful!");
    } else {
      setMsg("Error: Invalid Email or Password");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Registration Form</h3>
      <form onSubmit={handleReg}>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} required /><br />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} required /><br />
        <button>Register</button>
      </form>
      {saved && <p><b>Registered:</b> {saved.name} ({saved.email})</p>}

      <hr />

      <h3>Login Form</h3>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setLEmail(e.target.value)} required /><br />
        <input type="password" placeholder="Password" onChange={(e) => setLPass(e.target.value)} required /><br />
        <button>Login</button>
      </form>
      <p><b>{msg}</b></p>
    </div>
  );
}
