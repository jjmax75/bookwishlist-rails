// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(function() {
  const totalBooksRequired = 2;

  var rowCount = 0;

  $('input').keypress(function(e) {
    if (e.which === 13) {
      // TODO - Check all inputs have been filled in
      var title = $('.title').val();
      var author = $('.author').val();
      var isbn = $('.isbn').val();

      var newRow = $("#dynamic-table tbody").find('tr:hidden:first');

      newRow.show();

      newRow.find('input#books__title').val(title);
      newRow.find('input#books__author').val(author);
      newRow.find('input#books__isbn').val(isbn);

      $('#add-book-form :input').val('');

      rowCount += 1;

      $('.row-count sup').html(rowCount);

      if (rowCount === totalBooksRequired) {
        enoughBooks();
      };
    }

  });

  $('#dynamic-table').on ('click', 'td.delete', function() {
    $(this).closest('tr').hide();

    if (rowCount === totalBooksRequired) {
      notEnoughBooks();
    };

    rowCount -= 1;

    $('.row-count sup').html(rowCount);

  });

  $('#submit-button').click(function(e) {
    e.preventDefault();
    $("#book-choices-form").submit(); //http://stackoverflow.com/questions/618948/how-to-add-html-id-to-rails-form-tag
  });

  function enoughBooks() {
    $('#book-count').addClass('enough-books');
    $('#add-book-form :input').prop('disabled', true);
    $('#submit-button').prop('disabled', false);
  };

  function notEnoughBooks() {
    $('#book-count').removeClass('enough-books');
    $('#add-book-form :input').prop('disabled', false);
    $('#submit-button').prop('disabled', true);
  };

});
