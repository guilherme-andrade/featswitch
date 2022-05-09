Rails.application.routes.draw do
  mount Rswag::Api::Engine => '/api-docs'
  mount Rswag::Ui::Engine => '/api-docs'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :web do
    namespace :api do
      jsonapi_resources :actors
      jsonapi_resources :configuration_formats
      jsonapi_resources :switches do
        jsonapi_relationships
      end
      jsonapi_resources :permissions
    end
  end
end
