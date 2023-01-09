class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :text

  def text
    rails_blob_path(object.text, only_path: true) if object.text.attached?
  end
end
