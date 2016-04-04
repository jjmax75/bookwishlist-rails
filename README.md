# BookWishList in Ruby on Rails

A weekend project for a school library.

The school wants students to submit a list of ten books with:
 - title
 - author
 - isbn

The school will use this list to source new books for the library

24-Feb-2016
Almost ready to go live
Database, Google oauth keys and rails keys are now got ignored
You can set them by adding/editing:
DB - config/database.yml
Google - config/application.yml (part of Figaro)
Rails - config/secrets.yml

14-Feb-2016
Basic submission ready
Can post 10 items to DB

TODO -
- [x] Validate all fields are filled in on each row (jQuery) - 19 Feb 2016 - using bootstrap ('required')
- [x] Search for book data using API (GoodReads, OpenLibrary, Amazon, etc...), populate form either way - 19 Feb 2016 - Using Google Books
- [x] Google Apps login - only accounts from school domain
- [x] User model
Admin area
 - [x] delete/edit books (16-2-2016 -> new branch during testing)
 - [x] export to csv
 - [x] view users that have submitted


Potential -
 - Way to assign different quota for each grade
   - e.g. Grade 1 & 2 students only need to submit 3, Grade 3 & 4 submit 5, Grade 5+ submit 10
   - Also, possible to allow adding over 10 books
 - Way to poll what students have completed if this is given as an assignment so admin doesn't have to manually check. Students login used as verification.
