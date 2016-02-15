# BookWishList in Ruby on Rails

A weekend project for a school library.

The school wants students to submit a list of ten books with:
 - title
 - author
 - isbn

The school will use this list to source new books for the library

14-Feb-2016
Basic submission ready
Can post 10 items to DB

TODO - 
Validate all fields are filled in on each row (jQuery)
Search for book data using API (GoodReads, OpenLibrary, Amazon, etc...), populate form either way
Google Apps login - only accounts from school domain
Admin area
 - delete/edit books
 - export to pdf
 - view students that have submitted
Student model

Potential - 
 - Way to assign different quota for each grade
   - e.g. Grade 1 & 2 students only need to submit 3, Grade 3 & 4 submit 5, Grade 5+ submit 10
   - Also, possible to allow adding over 10 books
 - Way to poll what students have completed if this is given as an assignment so admin doesn't have to manually check. Students login used as verification.
