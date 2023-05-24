$(document).ready(function () {
  var win = $(window);
  var marker = $(".about-company");

  win.scroll(function () {
    if (win.scrollTop() + win.height() >= marker.offset().top) {
      $(".about-company").fadeIn(1400);
    } else {
      $(".about-company").finish().animate({ opacity: "hide" }, 1);
    }
  });

  var win2 = $(window);
  var marker2 = $(".contacts");

  win2.scroll(function () {
    if (win2.scrollTop() + win2.height() >= marker2.offset().top) {
      $(".contacts").fadeIn(1400);
    } else {
      $(".contacts").finish().animate({ opacity: "hide" }, 1);
    }
  });

  $("#feedback-form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      name: {
        required: true,
        minlength: 3,
      },
      message: {
        required: true,
        minlength: 3,
      },
    },
    messages: {
      email: {
        required: "Поле обязательно для заполнения",
        email: "Неверный формат"
      },
      name: {
        required: "Поле обязательно для заполнения",
        minlength: "Не менее 3-х символов",
      },
      message: {
        required: "Поле обязательно для заполнения",
        minlength: "Не менее 3-х символов",
      },
    },
    submitHandler: function () {
      alert("Сообщение отправлено!");
      $('#feedback-form')[0].reset();
    }
  });
  
});
