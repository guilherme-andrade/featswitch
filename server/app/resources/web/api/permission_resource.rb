module Web
  module Api
    class PermissionResource < ApplicationResource
      attributes :switch_id, :name, :configuration, :rules_ast

      relationship :switch, to: :one
    end
  end
end
