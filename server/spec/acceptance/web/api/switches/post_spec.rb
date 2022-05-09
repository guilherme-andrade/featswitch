# frozen_string_literal: true

require 'swagger_helper'

describe 'Switches API', swagger_doc: 'web/api/swagger.json' do
  path 'web/api/switches' do
    post 'Creating a Switch' do
      tags 'Switches'
      produces 'application/json'
      consumes 'application/json'
      description 'Creates a new switch'
      parameter name: :switch, in: :body, schema: { '$ref': '#/components/schemas/switch' }
      security [bearer_auth: []]

      response '201', 'Switch created' do
        schema '$ref': '#/components/schemas/switch'

        run_test!
      end      
    end
  end
end
