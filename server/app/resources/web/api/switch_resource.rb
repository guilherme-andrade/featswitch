module Web
  module Api
    class SwitchResource < ApplicationResource
      model_name 'Switch'

      attributes :key, :configuration, :configurable

      relationship :permissions, to: :many
      relationship :configuration_format, to: :one
    end
  end
end
