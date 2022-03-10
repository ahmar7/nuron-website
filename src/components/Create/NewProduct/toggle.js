import React from 'react';


let hidebx = () => {
    let bx = document.getElementById("hide_bx")
    bx.classList.remove('show-ticket')
}
let activetab = () => {
    let nexttab = document.getElementById('nav-homes')
    let prevtab = document.getElementById('nav-home')
    let nextbtn = document.getElementById('nav-home-tabs')
    let prevbtn = document.getElementById('nav-home-tab')
    prevbtn.classList.remove('active')
    nextbtn.classList.add('active')
    prevtab.classList.remove('show')
    prevtab.classList.remove('active')
    nexttab.classList.add('show')
    nexttab.classList.add('active')
}
let backtab = () => {
    let nexttab = document.getElementById('nav-homes')
    let prevtab = document.getElementById('nav-home')
    let nextbtn = document.getElementById('nav-home-tabs')
    let prevbtn = document.getElementById('nav-home-tab')
    prevbtn.classList.add('active')
    nextbtn.classList.remove('active')
    prevtab.classList.add('show')
    prevtab.classList.add('active')
    nexttab.classList.remove('show')
    nexttab.classList.remove('active')
}

let activetab1 = () => {
    let prevtab = document.getElementById('nav-homes')
    let nexttab = document.getElementById('nav-profile')
    let prevbtn = document.getElementById('nav-home-tabs')
    let nextbtn = document.getElementById('nav-profile-tab')
    prevbtn.classList.remove('active')
    nextbtn.classList.add('active')
    prevtab.classList.remove('show')
    prevtab.classList.remove('active')
    nexttab.classList.add('show')
    nexttab.classList.add('active')
}
let backtab1 = () => {
    let prevtab = document.getElementById('nav-homes')
    let nexttab = document.getElementById('nav-profile')
    let prevbtn = document.getElementById('nav-home-tabs')
    let nextbtn = document.getElementById('nav-profile-tab')
    prevbtn.classList.add('active')
    nextbtn.classList.remove('active')
    prevtab.classList.add('show')
    prevtab.classList.add('active')
    nexttab.classList.remove('show')
    nexttab.classList.remove('active')
}
let activetab2 = () => {
    let nexttab = document.getElementById('nav-contact')
    let prevtab = document.getElementById('nav-profile')
    let nextbtn = document.getElementById('nav-contact-tab')
    let prevbtn = document.getElementById('nav-profile-tab')
    prevbtn.classList.remove('active')
    nextbtn.classList.add('active')
    prevtab.classList.remove('show')
    prevtab.classList.remove('active')
    nexttab.classList.add('show')
    nexttab.classList.add('active')
}
let backtab2 = () => {
    let nexttab = document.getElementById('nav-contact')
    let prevtab = document.getElementById('nav-profile')
    let nextbtn = document.getElementById('nav-contact-tab')
    let prevbtn = document.getElementById('nav-profile-tab')
    prevbtn.classList.add('active')
    nextbtn.classList.remove('active')
    prevtab.classList.add('show')
    prevtab.classList.add('active')
    nexttab.classList.remove('show')
    nexttab.classList.remove('active')
}
let activetab3 = () => {
    let prevtab = document.getElementById('nav-contact')
    let nexttab = document.getElementById('nav-review')
    let prevbtn = document.getElementById('nav-contact-tab')
    let nextbtn = document.getElementById('nav-review-tab')
    prevbtn.classList.remove('active')
    nextbtn.classList.add('active')
    prevtab.classList.remove('show')
    prevtab.classList.remove('active')
    nexttab.classList.add('show')
    nexttab.classList.add('active')
}


export { activetab, activetab1, activetab2, activetab3, hidebx, backtab, backtab1, backtab2 };
