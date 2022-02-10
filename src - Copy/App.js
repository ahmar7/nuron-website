import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Routerapp from "./config/router";
// CSS Link
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/slick.css";
import "./assets/css/vendor/slick-theme.css";
import "./assets/css/vendor/nice-select.css";
import "./assets/css/plugins/feature.css";
import "./assets/css/plugins/jquery-ui.min.css";
import "./assets/css/plugins/image.css";
import "./assets/css/styleimg.css";
import "./assets/css/style.css";
const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

function App() {
  return (
    <div>
      <Routerapp />
    </div>
  );
}

export { App, useScript };
