$(document).ready(function() {
    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: false,
        navigation: false,
        anchors: ['home', 'about', 'music', 'galery', 'video', 'contact'],
        // afterLoad: function(anchorLink, index) {
        // 	// DO HERE SHOW MENU WITH JQUERY AND ANIMATE.CSS
        //     //using index
        //     if (index == 2) {
        //         // console.log("Section 3 ended loading");
        //     }

        //     //using anchorLink
        //     // if(anchorLink == 'secondPage'){
        //     //     console.log("Section 2 ended loading");
        //     // }
        // }
    });
});

// DO NOT DELETE
// window.history.pushState("object or string", "Title", "/new-url");