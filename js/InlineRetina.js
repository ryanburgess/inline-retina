// Checking for Retina Devices
var query = "(-webkit-min-device-pixel-ratio: 1.5),\
(min--moz-device-pixel-ratio: 1.5),\
(-o-min-device-pixel-ratio: 3/2),\
(min-device-pixel-ratio: 1.5),\
(min-resolution: 144dpi),\
(min-resolution: 1.5dppx)";

// If retina screen replace 
if (window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia(query).matches)) {
    // Replace screenshots with @2x version if retina screen
    $(".hd").each(function() {
        var image = $(this).attr("src");
        var ext = image.split(".").pop();
        var updateImage;
        if(ext == "png"){
            updateImage = image.replace(".png", "@2x.png");
        }else if(ext == "jpg"){
            updateImage = image.replace(".jpg", "@2x.jpg");
        }else if(ext == "jpeg"){
            updateImage = image.replace(".jpeg", "@2x.jpeg");
        }
        $(this).attr("src", updateImage);
    });
}