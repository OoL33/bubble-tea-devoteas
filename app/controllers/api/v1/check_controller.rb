class Api::V1::CheckController < ApplicationController
  # skip_before_action :authenticate_user!, only: [:check]

  # GET /api/v1/check
  def check
    render json: current_user
  end
end
