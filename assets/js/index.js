function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true);
  }
  return (false);
}
var validate = function (val) {
  var flag = ValidateEmail(val);
  $('#right-icon').remove();
  $('#is-danger-email-message').remove();
  if (val !== "") {
    $('#is-danger-required-message').remove();
  } else {
    return requiredInput(val);
  }
  if (flag) {
    $('#contactEmail').removeClass('is-danger');
    $('#email').append(`
      <span id="right-icon" class="icon is-small is-right">
      <i class="fa fa-check" style="color:#00d1b2"></i>
    </span>
    `);
    return true;
  } else {
    $('#contactEmail').addClass('is-danger');
    $('#email').append(`
      <span id="right-icon" class="icon is-small is-right">
      <i class="fa fa-warning" style="color:red"></i>
    </span>`
    );
    $("#email").parent().append(`
      <p id="is-danger-email-message" class="help is-danger" style="text-align:left;">This email is invalid</p>
    `);
    return false;
  }
}
var requiredInput = function (val) {
  if (val === "") {
    $('#is-danger-required-message').remove();
    $("#email").parent().append(`
      <p id="is-danger-required-message" class="help is-danger" style="text-align:left;">Please input your email</p>
    `);
    return false;
  } else {
    $('#is-danger-required-message').remove();
    return true;
  }
}
var contact = function () {
  var data = {
    email: $('#contactEmail').val(),
    subject: $('#contactSubject').val(),
    message: $('#contactMessage').val(),
  }
  var flag = validate(data.email);
  if (flag) {
    $.ajax({
      url: 'http://34.211.205.168/api/contact',
      type: 'PUT',
      data: data,
      success: function (data, textStatus) {
        console.log(data);
        if (data.success === 'success') {
          $("#success-dialog").dialog();
          $('.ui-dialog-titlebar-close').empty().append('<i class="fa fa-times" aria-hidden="true"></i>');
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(textStatus);
      }
    });
  } else {

  }
}
