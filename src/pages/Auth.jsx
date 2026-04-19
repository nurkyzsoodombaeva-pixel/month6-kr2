import { useState } from "react";
import { api } from "../api/instance";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const handleLogin = async () => {
    const { data } = await api.post("/register", { email, password });

    login({
      user: data.data,
      token: data.token,
    });

    navigate("/posts");
  };

  return (
    <div>
      <h2>Вход</h2>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
}