import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Header from "@/components/Header/Header";
import "./App.css";
import { SearchPostProvider } from "./context/searchContext";
import MobileMenu from "./components/MobileMenu/MobileMenu";

function App() {
  return (
    <>
      <SearchPostProvider>
        <Header />
        <MobileMenu />
        <main>
          <BrowserRouter
            future={{
              v7_startTransition: true,
            }}>
            <Router />
          </BrowserRouter>
        </main>
      </SearchPostProvider>
    </>
  );
}

export default App;
