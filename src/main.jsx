import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import "./18n";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>

    <Suspense
      fallback={
        <div className="text-center text-[25px] text-[#212B31]">...Loading</div>
      }
      >
      <App />
    </Suspense>
      </Provider>
  </React.StrictMode>
);
