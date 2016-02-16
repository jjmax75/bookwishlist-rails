ActiveAdmin.register Book do
  filter :title
  filter :author
  config.per_page = 25

  permit_params :title, :author, :isbn
  config.breadcrumb = false

  index download_links: [:csv] do
    selectable_column
    column :title
    column :author
    column 'ISBN', :isbn
    actions
  end

end
