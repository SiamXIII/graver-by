jQuery(document).ready(function ($) {
    //main slider
    var options = {
        $AutoPlay: true,
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $ChanceToShow: 2,
            $SpacingX: 10,
            $AutoCenter: 1
        }
    };
    var mainSlider = new $JssorSlider$('mainSlider', options);

    //popular slider
    var popularOptions = {
        $AutoPlay: false,
        $DragOrientation: 2,
        $PlayOrientation: 2,
        $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 0,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
        }
    };
    var mainSlider = new $JssorSlider$('popularSlider', popularOptions);
})

