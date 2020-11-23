$(document).ready(function () {
  
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    //$(targetModal).find("body").addClass("modal-open");
  }

  function closeModal() {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document
          .querySelector(".modal__overlay")
          .classList.remove("modal__overlay--visible");
        document
          .querySelector(".modal__dialog")
          .classList.remove("modal__dialog--visible");
      }
    },
    false
  );
  $(window).scroll(function () {
    return false;
  });
  //Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Name field is required",
          minlength: "Please enter at least 2 characters",
        },
        email: {
          required: "Email field is required",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone number field is required",
        },
      },
    });
  });
  AOS.init();
  $(".footer__input--phone").mask("+7 (999) 99-99-999");
  $(".modal__input--phone ").mask("+7 (999) 99-99-999");
});
