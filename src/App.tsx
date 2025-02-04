import React from "react";
import { SearchPostProvider } from "./context/searchContext";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Header from "@/components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import "./App.css";

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
