import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import { useEffect, useState } from "react";
import IndexRoute from "./routes/IndexRoute";
import { checkAuth } from "./utils/checkAuth"; // ✅ Import the utility

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true); // 🕒 For async auth check

  useEffect(() => {
    const verifyAuth = async () => {
      const result = await checkAuth();
      setIsAuth(result.authenticated);
      setLoading(false);
    };
    verifyAuth();
  }, []);

  if (loading) return <div>Loading...</div>; // ⏳ Optional loading screen

  return (
    <BrowserRouter>
      <Routes>
        {/* Public login route */}
        <Route
          path="/auth"
          element={<Auth isAuth={isAuth} setIsAuth={setIsAuth} />}
        />

        {/* Protected routes */}
        {isAuth ? (
          IndexRoute()
        ) : (
          <Route path="*" element={<Navigate to="/auth" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
