class ErrorsController < ApplicationController
  def not_found
    render json: { error: 'Resource not found' }, status: :not_found
  end
end
