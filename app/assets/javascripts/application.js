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
// http://bootsnipp.com/snippets/featured/dynamic-table-row-creation-and-deletionS

$(document).ready(function() {
  var i = 1;
  $("#add-row").click(function() {
    $('#book' + i).html(
      "<td><input name='title" + i + "' type='text' placeholder='Title...' class='form-control'  /> </td><td><input  name='author" + i + "' type='text' placeholder='Author...'  class='form-control'></td><td><input name='isbn" + i + "' type='text' placeholder='ISBN...'  class='form-control'></td>");

    $('#dynamic-table').append('<tr id="book' + (i + 1) + '"></tr>');
    i++;
  });
  $("#delete-row").click(function() {
    if (i > 1) {
      $("#book" + (i - 1)).html('');
      i--;
    }
    else {
      console.log('What\'s up?');
      $("#book0 input").val('');
    }
  });
});