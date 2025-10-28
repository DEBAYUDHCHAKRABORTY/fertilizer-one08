import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/arya-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </BrowserRouter>
);
