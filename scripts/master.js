jQuery(document).ready(function ($) {

    // Using default configuration
    $('#carousel').carouFredSel();

    // Using custom configuration
    $('#carousel').carouFredSel({
        items: 1,
        direction: "left",
        circular: true,
        scroll: {
            items: 1,
            fx: "fade",
            duration: 1000,
        },
        prev: {
            button: "#carousel_prev",
            key: "left"
        },
        next: {
            button: "#carousel_next",
            key: "right"
        }
    });
})

