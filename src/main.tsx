import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ExpensesProvider } from "./contexts/ExpensesProvider.tsx";
import { FilterProvider } from "./contexts/FilterProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ExpensesProvider>
    <FilterProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </FilterProvider>
  </ExpensesProvider>
);
