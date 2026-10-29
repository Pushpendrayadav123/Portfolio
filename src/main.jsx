import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import { Home, About, Contact, Skills } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
