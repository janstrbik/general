// ==UserScript==
// @name         Hide scrollbar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide scrollbar on sidearmsports.com
// @author       Jan Strbik
// @grant        none
// @match        *://*.sidearmsports.com/*/*
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement('style');
    style.innerHTML = `
    ::-webkit-scrollbar {
        width: 0;
    }
    `;
    document.head.appendChild(style);
})();
