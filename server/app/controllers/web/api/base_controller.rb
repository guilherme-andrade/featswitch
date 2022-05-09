module Web
  module Api
    class BaseController < ApplicationController
      include JSONAPI::ActsAsResourceController
    end
  end
end
