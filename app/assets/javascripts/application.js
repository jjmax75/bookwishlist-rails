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
// Google API - AIzaSyAkfDpwB1QFnJzhnFAX9kriYvcJs0vHM0c
// Add domain restrictions to Google Developer console

$(function() {
  const totalBooksRequired = 2;

  var rowCount = 0;

  $('#add-book-form input').keypress(function(e) {
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
      }
    }

  });

  $('#dynamic-table').on ('click', 'td.delete', function() {
    $(this).closest('tr').hide();

    if (rowCount === totalBooksRequired) {
      notEnoughBooks();
    }

    rowCount -= 1;

    $('.row-count sup').html(rowCount);

  });

  $('#submit-button').click(function(e) {
    e.preventDefault();
    $("#book-choices-form").submit(); //http://stackoverflow.com/questions/618948/how-to-add-html-id-to-rails-form-tag
  });

  $('#search-button').click(function(e) {
    e.preventDefault();
    getResults($('#search-box').val());
  });

  function enoughBooks() {
    $('#book-count').addClass('enough-books');
    $('#add-book-form :input').prop('disabled', true);
    $('#submit-button').prop('disabled', false);
  }

  function notEnoughBooks() {
    $('#book-count').removeClass('enough-books');
    $('#add-book-form :input').prop('disabled', false);
    $('#submit-button').prop('disabled', true);
  }

  function getResults(searchTerm) {
    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes',
      dataType: 'jsonp',
      printType: 'books',
      maturityRating: 'NOT_MATURE',
      data: {
        'key': 'AIzaSyAkfDpwB1QFnJzhnFAX9kriYvcJs0vHM0c',
        'q': searchTerm
      },
      success: function(data) {
        var volumes = data.items.map(function(item) {
          var authors = item.volumeInfo.authors ?
            item.volumeInfo.authors.join(', ') :
            'Unknown';

          var image = item.volumeInfo.imageLinks ?
            item.volumeInfo.imageLinks.thumbnail :
            null;

          var isbn = item.volumeInfo.industryIdentifiers ?
            item.volumeInfo.industryIdentifiers[0].identifier :
            '';

            return (
              {
                title: item.volumeInfo.title,
                authors: authors,
                isbn: isbn,
                volumeInfo: item.volumeInfo,
                details: {
                  thumbnail: image,
                  subtitle: item.volumeInfo.subtitle || '',
                  description: item.volumeInfo.description || ''
                }
              }
          );
        });
        listResults(volumes);
      }
    });
  }

  function listResults(volumes) {
    var volumeList = '';
    volumes.forEach(function(volume) {
      console.log(volume);
      volumeList += '<tr><td>' + volume.title + '</td><td>' + volume.authors + '</td><td>' + volume.isbn + '</td><td><button class="btn btn-default btn-info" type="submit" data-toggle="modal" data-target="#book-details-modal">Details</button></td><td><button class="btn btn-default btn-success" type="submit">Select</button></td></tr>';
    });

    $('#search-results tbody').html(volumeList);
  }

  $('#search-results tr button').click(function(e) {
    e.preventDefault();

  });
});
