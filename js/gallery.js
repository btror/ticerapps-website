
/*
* JQUERY PLUGINS (2): cycle plugin (line 92) and ezPlus zoom plugin (line 144)
* 
* JQUERY WIDGETS (2): tooltip widget (line 102) and tooltip widget (at contact.js on line 5)
*
* JS FUNCTIONS (previous assignment) that update the page (2 onload, 4 .click, 1 onmouseover, 1 onmouseout)
*   onload (line 19) and at contact.js (line 22)
*   .click (lines 43, 53, and 63)
*   onmouseover (line 27)
*   onmouseout (line 32)
*
*/

/******************************
* onload function (part c req)
*******************************/

function onloadFunction() { //this function is not called, but the one in contact.js is
    alert("Welcome to our gallery! Here we have demos and information about the developer.");
}

/*************************************************
* onmouseover and onmouseout function (part c req)
**************************************************/

function biggerImage(x) {
    x.style.height = "71%";
    x.style.width = "71%";
}

function normalImage(x) {
    x.style.height = "75%";
    x.style.width = "75%";
}

/*******************************
* jquery function 1 (part c req)
********************************/

$(function () {
    //show length unit converter demo
    $('#demo1').click(function () {
        if ($('#lengthDemo').css('display') == 'none') {
            $('#lengthIcon').fadeOut(400).next().delay(400),
                $('#lengthDemo').fadeIn(400);
                $('#ul1').fadeOut(400);
        } else if ($('#lengthIcon').css('display') == 'none') {
            $('#ul1').fadeIn(0);
            $('#lengthDemo').fadeOut(0).next().delay(500),
                $('#lengthIcon').fadeIn(0);
        }
    });
    //show apportionment calculator demo
    $('#demo2').click(function () {
        if ($('#apportionDemo').css('display') == 'none') {
            $('#apportionIcon').fadeOut(400).next().delay(400),
                $('#apportionDemo').fadeIn(400);
                $('#ul2').fadeOut(400);
        } else if ($('#apportionIcon').css('display') == 'none') {
            $('#ul2').fadeIn(0);
            $('#apportionDemo').fadeOut(0).next().delay(500),
                $('#apportionIcon').fadeIn(0);
        }
    });
    //show digital storage converter demo
    $('#demo3').click(function () {
        if ($('#digitalDemo').css('display') == 'none') {
            $('#digitalIcon').fadeOut(400).next().delay(400),
                $('#digitalDemo').fadeIn(400);
                $('#ul3').fadeOut(400);
        } else if ($('#digitalIcon').css('display') == 'none') {
            $('#ul3').fadeIn(0);
            $('#digitalDemo').fadeOut(0).next().delay(500),
                $('#digitalIcon').fadeIn(0);
        }
    });
});

/*******************************
* jquery function 2 (part c req)
********************************/

$(function () {
    var x = document.getElementById("overviews2");

    $('#readMore').click(function () {
        if (window.getComputedStyle(x).display === "none") {
            $('#overviews2').fadeIn(500);
        } else {
            $('#overviews2').hide();
        }
    });
});

/*********************************
* jquery cycle plugin (part d req)
**********************************/

$(function () {
    $('.slideshow').cycle({
        fx: 'fade'
    });
});

/***********************************
* jquery tooltip widget (part d req)
************************************/

$(function () {
    $("#lengthIcon").tooltip({
        items: 'img.lengthIcon',
        content: 'Length Unit Converter',
        position: {
            my: "center bottom",
            at: "center top-10",
            collision: "none",
        },
        show: "fade",


    });

    $("#apportionIcon").tooltip({
        items: 'img.apportionIcon',
        content: 'Apportionment Calculator',
        position: {
            my: "center bottom",
            at: "center top-10",
            collision: "none",
        },
        show: "fade",

    });

    $("#digitalIcon").tooltip({
        items: 'img.digitalIcon',
        content: 'Digital Storage Converter',
        position: {
            my: "center bottom",
            at: "center top-10",
            collision: "none",
        },
        show: "fade",

    });
});



