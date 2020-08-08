/***********************************
* jquery tooltip widget (part d req)
************************************/

$(function () {
    $('#contact-image').tooltip({
        items: 'img.contact-image',
        content: 'Brandon\'s school',
        position: {
            my: "center bottom",
            at: "center bottom-10",
            collision: "none",
        },
        show: "fade"
    });
});

/***********************************
* onload function (part d req)
************************************/

function onloadFunction() {
    alert("We do not keep or sell your information or data.");
}