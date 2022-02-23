import React from "react"
import { Helmet } from "react-helmet"
import AnimatedCursor from "react-animated-cursor"
import Routerapp from "./config/router"
import "./App.css"

// CSS Link
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
    // Custom Cursor
    var myCursor = $(".mouse-cursor")
    // if (myCursor.length) {
    //   if ($("body")) {
    //     const e = document.querySelector(".cursor-inner")
    //     const t = document.querySelector(".cursor-outer")
    //     let n, i = 0
    //     let o = !1;
    //     $(window).on("mousemove", function (s) {
    //       return o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (n = s.clientY), (i = s.clientX)
    //     }),
    //       $("body").on("mouseenter", "a, .cursor-pointer", function () {
    //         return e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
    //       }),
    //       $("body").on("mouseleave", "a, .cursor-pointer", function () {
    //         return ($(this).is("a") && $(this).closest(".cursor-pointer").length) || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
    //       }),
    //       (e.style.visibility = "visible"),
    //       (t.style.visibility = "visible")
    //   }
    // }

    // Hamburger Menu
    // $(".hamberger-button").on("click", function (e) {
    //   $(".popup-mobile-menu").addClass("active")
    // })

    // $(".close-menu").on("click", function (e) {
    //   $(".popup-mobile-menu").removeClass("active")
    //   $(".popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").siblings(".submenu, .rn-megamenu").removeClass("active").slideUp("400")
    //   $(".popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").removeClass("open")
    // })

    // $(".popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").on("click", function (e) {
    //   e.preventDefault()
    //   $(this).siblings(".submenu, .rn-megamenu").toggleClass("active").slideToggle("400")
    //   $(this).toggleClass("open")
    // })

    // $(".popup-mobile-menu").on("click", function (e) {
    //   e.target === this && $(".popup-mobile-menu").removeClass("active") && $(".popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").siblings(".submenu, .rn-megamenu").removeClass("active").slideUp("400") && $(".popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").removeClass("open")
    // })

    // $(".one-page-vavigation-popup .mainmenu li > a").on("click", function (e) {
    //   e.preventDefault()
    //   $(".popup-mobile-menu").removeClass("active")
    //   $(".popup-mobile-menu .mainmenu li > a").siblings(".submenu").removeClass("active")
    // })
  })
  return (
    <div
      style={{ 'cursor': 'default', 'pointer-events': 'auto' }}
    >
      <AnimatedCursor
        className="cursor-an"
        color="77, 89, 94"
        outerAlpha={0.4}
        trailingSpeed={1}
        innerSize={4.5}
        outerSize={37.5}
        innerScale={0}
        outerScale={1.5}
      />
      <Routerapp />
    </div>
  )
}

export default App
