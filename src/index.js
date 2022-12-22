import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RadomPeoplePage from "./pages/RadomPeoplePage";
import ProductCategoriesPage from "./pages/ProductCategoriesPage";
import ProductCategoryEdit from "./pages/ProductCategoryEdit";
import ProductCategoryDelete from "./pages/ProductCategoryDelete";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="welcome" element={<App />} />
      <Route path="random" element={<RadomPeoplePage />} />
      <Route path="product-categories" element={<ProductCategoriesPage />} />
      <Route path="product-categories-edit/:id" element={<ProductCategoryEdit />} />
      <Route path="product-categories-delete/:id" element={<ProductCategoryDelete />} />

      <Route path="/" element={<Navigate to="/welcome" replace />} />
    </Routes>
  </BrowserRouter>
);
