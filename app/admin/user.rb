ActiveAdmin.register User do
  menu :if => proc { current_user.administrator? }

  before_filter :authenticate_user!
  before_filter do
    redirect_to root_path unless current_user && current_user.administrator?
  end

  filter :name
  filter :superuser

  config.per_page = 25

  permit_params :name, :superuser
  config.breadcrumb = false

  index do
    selectable_column
    column :name
    column :email
    column :superuser
    actions
  end

end
