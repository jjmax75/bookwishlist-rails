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
  var rowCount = 0;
  
  $('input').keypress(function(e) {
    if (e.which === 13) {
      // TODO - Check all inputs have been filled in
      var title = $('.title').val();
      var author = $('.author').val();
      var isbn = $('.isbn').val();
      
      $('#dynamic-table').append(
        '<tr><td>' + title + '</td><td>' + author + '</td><td>' + isbn + '</td><td class="delete"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></td></tr>'
      );
      
      $('#add-book-form :input').val('');
      
      rowCount += 1;
      
      $('.row-count').html(rowCount);
      
      if (rowCount === 10) {
        enoughBooks();
      }
    }
  
  });
  
  $('#dynamic-table').on ('click', 'td.delete', function() {
    $(this).closest('tr').remove();
    
    rowCount -= 1;
    
    $('.row-count').html(rowCount);
    
    if (rowCount < 10) {
      $('.row-count').removeClass('enough-books');
      $('#add-book-form :input').prop('disabled', false);
    }
  });
  
  function enoughBooks() {
    $('.row-count').addClass('enough-books');
    $('#add-book-form :input').prop('disabled', true);
  };
  
});
