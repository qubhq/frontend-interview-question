import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./routes/index";
import Category from "./routes/category";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
