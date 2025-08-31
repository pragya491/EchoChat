import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "stream-chat-react/dist/css/v2/index.css";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <App />

        </ErrorBoundary>
        
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);