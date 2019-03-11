// ==UserScript==
// @name         Antispy
// @namespace    antispy.tampermonkey.com
// @version      0.2
// @description  try to take over the world!
// @author       You
// @include      https://www.google.com/?*
// @include      https://www.google.com/
// @include      https://www.google.com
// @update       https://raw.githubusercontent.com/gsquaredxc/antispy/master/antispy.meta.js
// @download     https://raw.githubusercontent.com/gsquaredxc/antispy/master/antispy.user.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "\o/";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    });
    document.head.innerHTML = ''
    document.body.innerHTML = '<object type="application/x-shockwave-flash" data="https://www.mcleodgaming.com/flash/?f=games/SSF2Beta_v1_1_0_1b.swf" width="100%" height="100%"> <param name="movie" value="https://www.mcleodgaming.com/flash/?f=games/SSF2Beta_v1_1_0_1b.swf"> <param name="quality" value="high"> </object>'
    document.body.style = "margin: 0; height: 100%;"
    document.documentElement.style = 'margin: 0; height: 100%;'
})();
