'use strict'

document.addEventListener("DOMContentLoaded", function(event) {
    const back = document.getElementById('back')
    const backMob = document.getElementById('back-mobile')
    const link = document.querySelector('.nav__link')
    const linkMain = document.getElementById('main')
    const logoLink = document.querySelector('.logo')
    const logoLinkFooter = document.querySelector('#footer-link')

    logoLink.addEventListener('click', () => {linkMain.click()})
    logoLinkFooter.addEventListener('click', () => {linkMain.click()})

    back.addEventListener('click', () => {link.click()})
    backMob.addEventListener('click', () => {link.click()})
});