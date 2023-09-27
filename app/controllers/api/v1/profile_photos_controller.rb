class ProfilePhotosController < ApplicationController
  before_action :authenticate_user!

  def show
    user = User.find(params[:id])
    send_file user.profile_photo.path # Adjust this according to your setup
  end

  # PATCH /profile_photos/:id
  def update
    user = User.find(params[:id])
    # Handle profile photo updates here
  end
end
