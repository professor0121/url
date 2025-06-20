import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import { useState } from "react";
import IndexRoute from "./routes/IndexRoute";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth page with no layout */}
        <Route
          path="/auth"
          element={<Auth isAuth={isAuth} setIsAuth={setIsAuth} />}
        />

        {/* Protected routes with layout */}
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
