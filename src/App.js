import React from "react"
import { Helmet } from "react-helmet"
import AnimatedCursor from "react-animated-cursor"
import Routerapp from "./config/router"
import "./App.css"
import "@fontsource/plus-jakarta-sans";
import "./assets/css/vendor/bootstrap.min.css"
import "./assets/css/vendor/slick.css"
import "./assets/css/vendor/slick-theme.css"
import "./assets/css/vendor/nice-select.css"
import "./assets/css/plugins/feature.css"
import "./assets/css/plugins/jquery-ui.min.css"
import "./assets/css/plugins/image.css"
import "./assets/css/styleimg.css"
import "./assets/css/style.css"
import $ from "jquery"

function App() {
  $(function () {
    var myCursor = $(".mouse-cursor")

  })
  return (
    <div
      style={{ 'cursor': 'default', 'pointer-events': 'auto' }}
    >
      {/* <AnimatedCursor
        className="cursor-an"
        color="77, 89, 94"
        outerAlpha={0.4}
        trailingSpeed={1}
        innerSize={4.5}
        outerSize={37.5}
        innerScale={0}
        outerScale={1.5}
      /> */}
      <Routerapp />
    </div>
  )
}

export default App
