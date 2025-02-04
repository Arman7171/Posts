import React, { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Posts";
import NotFound from "./pages/NotFound";
const router = () => {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Navigate, { to: "/posts" }) }),
        React.createElement(Route, { path: "/posts", element: React.createElement(Login, null) }),
        React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) })));
};
export default router;
