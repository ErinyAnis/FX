$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 55) {
      $("header nav").addClass("fixed-top");
      $("header nav").addClass("nav-color");
    } else {
      $("header nav").removeClass("fixed-top");
    }
    var scroll = $(window).scrollTop();
  });
    
  $("#click").change(function () {
    // Toggle the class based on the checkbox state
    $(".overlay").toggleClass("display", this.checked);
  });
  $("#click").change(function () {
    if ($(this).is(":checked")) {
      $("nav ul").css("bottom", "0");
    } else {
      // If you want to reset the style when unchecked
      $("nav ul").css("bottom", "-100%"); // Reset to default value or any other value you want
    }
  });

  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-xmark");
  });

  $("body").on("click", ".overlay.display", function () {
    $("#click").click();
    $(".fa-bars").removeClass("fa-xmark");
  });
  // end-navbar

  // language-toggle-btn
  $(".language-button").click(function () {
    $(this).text($(this).text() == "English" ? "Arabic" : "English");
  });
});
