class Api::V1::ProfilePhotosController < ApplicationController
  before_action :authenticate_user!

  def show
    user = User.find(params[:user_id])

    if user.profile_photo.present?
      # Send the user's profile photo from S3
      send_file user.profile_photo.url, type: user.profile_photo.content_type, disposition: 'inline'
    else
      default_photo_url = default_profile_photo_url
      redirect_to default_photo_url
    end
  end

  # PATCH /profile_photos/:id
  def update
    user = User.find(params[:id])
    # Handle profile photo updates here
  end

  private

  def default_profile_photo_url
    profile_photo_uploader = ProfilePhotoUploader.new
    profile_photo_uploader.default_url
  end
end
