ActiveAdmin.register Book do
  filter :title
  filter :author
  filter :user

  config.per_page = 25

  permit_params :title, :author, :isbn, :user_id
  config.breadcrumb = false

  index download_links: [:csv] do
    selectable_column
    column :title
    column :author
    column 'ISBN', :isbn
    column :user
    actions
  end

end
