import React, { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Posts";
import NotFound from "./pages/NotFound";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route path="/posts" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default router;
