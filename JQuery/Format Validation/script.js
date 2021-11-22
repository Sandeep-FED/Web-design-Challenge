$(document).ready(function () {
  $("#signup-form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 4,
        maxlength: 6,
      },

      sname: {
        required: true,
        minlength: 1,
      },
      email: {
        required: true,
        email: true,
      },
      pwd: {
        minlength: 6,
      },
      gender: {
        required: true,
      },
    },
    messages: {
      fname: {
        required: "This field is required",
        minlength: " Requires a minimum characters of 6",
      },
      sname: "This field is required",
      email: "This field is required",
    },
  });
});
