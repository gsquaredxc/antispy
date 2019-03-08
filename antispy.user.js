// ==UserScript==
// @name         Antispy
// @namespace    antispy.tampermonkey.com
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        www.google.com/*
// @update       https://raw.githubusercontent.com/gsquaredxc/antispy/master/antispy.meta.js
// @download     https://raw.githubusercontent.com/gsquaredxc/antispy/master/antispy.user.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    document.body.innerHTML = "<iframe src='https://www.mcleodgaming.com/games/ssf2' style='border: 0; width: 100%; height: 100%'>"
    document.body.style = "margin: 0;"
})();
