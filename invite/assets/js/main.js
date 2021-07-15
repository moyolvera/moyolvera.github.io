(function ($) {
  "use strict";

  //
  // Preloader
  jQuery(window).load(function () {
    jQuery(".preloader").delay(1000).fadeOut("slow");
  });

  $(document).ready(function () {
    // show maps on click
    $("#marker-wrapper").click(function () {
      // open link in new tab
      window.open("https://goo.gl/maps/y7ixkZUYXCKsxW1P9", "_blank");
    });

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    $.ajax({
      method: "POST",
      url: "https://us-central1-ilnamiki.cloudfunctions.net/api/civil",
      headers: { auth: "wedding" },
      data: JSON.stringify({
        token,
      }),
      contentType: "application/json",
      success: function (response) {
        $("#invite-names-id").text(response);
      },
    });
  });
})(window.jQuery);
