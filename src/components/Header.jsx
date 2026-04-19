import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export function Header() {
  const { isAuth, user, logout } = useAuthStore();
  const location = useLocation();

  if (location.pathname === "/auth" || location.pathname === "/register") {
    return null;
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>
        {isAuth ? `Привет, ${user?.email}` : "Гость"}
      </span>

      <div>
        {isAuth ? (
          <>
            <Link to="/create">Создать пост</Link>
            <button onClick={logout}>Выйти</button>
          </>
        ) : (
          <Link to="/auth">Войти</Link>
        )}
      </div>
    </div>
  );
}