class Product < ApplicationRecord
    include PgSearch::Model

    pg_search_scope :product_search,
                    against: [:name],
                    using: { tsearch: { prefix: true } }

    validates :name, presence: true, uniqueness: true, length: { maximum: 150 }
    has_one_attached :text
end
