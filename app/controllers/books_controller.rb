class BooksController < ApplicationController
  def new
    @library = []
    10.times do
      @library << Book.new
    end
  end

  def create
    params["books"].each do |book|
      Book.create(book_params(book))
    end
  end

  def edit
  end

  def destroy
  end

  def index
  end

  private
    def book_params(my_params)
      my_params.permit(:title, :author, :isbn, :user_id)
    end
end
