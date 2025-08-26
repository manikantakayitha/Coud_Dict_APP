import React, { useState, useEffect } from "react";
import DictionaryApp from "./components/DictionaryApp";
import LoginScreen from "./components/LoginScreen";
import './styles/App.css'; // Ensure global styles are imported

export default function App() {
  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const handleLogin = (username) => setCurrentUser(username);
  const handleLogout = () => setCurrentUser(null);

  if (!currentUser) return <LoginScreen onLogin={handleLogin} />;

  return (
    <div className="app-wrapper">
      <DictionaryApp
        currentUser={currentUser}
        onLogout={handleLogout}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}