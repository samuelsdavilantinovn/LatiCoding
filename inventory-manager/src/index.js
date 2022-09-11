import React from "react";
import ReactDOM from "react-dom/client";
import { BarangManager } from "./features/barang.features";
// import { PostAdmin } from "./features/post.features";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <PostAdmin /> */}
    <BarangManager />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();