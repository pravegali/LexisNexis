// ==UserScript==
// @name         cert2-searchform
// @namespace    cert2-searchform
// @version      0.1
// @description  New landing page search form
// @author       Praveen Gali
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @require      https://raw.githubusercontent.com/bressljr/searchform/master/selecty.js
// @resource     customcss https://raw.githubusercontent.com/bressljr/searchform/master/styles.css?v=3
// @resource     selectycss https://raw.githubusercontent.com/bressljr/searchform/master/selecty.css?v=1
// @resource     juriscss https://raw.githubusercontent.com/bressljr/searchform/master/hummingbird-treeview.css?v=5
// @resource     jurishtml https://raw.githubusercontent.com/bressljr/searchform/master/juris.html?v=4
// @match        https://cert2-advance.lexis.com/usresearchhome*
// @match        https://cert2-advance.lexis.com/firsttime*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// ==/UserScript==


(function() {
    'use strict';

    // Your code here...

    // wait for the practice area container to load
    waitForKeyElements(".comp.practiceareacontainer", main, true);

    function main() {

        $("#container-a").detach().prependTo(".comp.practiceareacontainer");
        $("#container-a").css('background-color','white');
        $("#container-a").css('margin','auto');

        $("#g7d5kkk > ln-searchbox > div").css("padding","0px 45px 0px 45px");

        // move the explore content out of header
        $("#g7x_kgk").detach().prependTo("#grid-container");


        // change comp practiceareacontainer body color to #eee
        $(".comp.practiceareacontainer").css('background-color', '#eee');

        // change the header under it to white.
        $("#g7x_kgk > div").css("background-color", "white");

        //mor$(e options
        $("#g7d5kkk > ln-searchbox > div > div.more-options-tray-wrapper > more-options-tray > div.more-options-button-wrapper > button").css("margin-bottom",  "-38px");
        //explore content border
        $("#g7x_kgk > div").css("border-top","6px solid rgb(188, 190, 192)");

    }

})();