class ProductsController < ApplicationController
    def search
        if params[:query].present?
            products = Product.product_search(params[:query]).order(created_at: :desc)
            render json: products, status: 200
        else
            products = []
        end
    end

    def create
        product = Product.new(product_params)
        if product.save
            render json: product, status: 200
        else
            render json: product.errors.full_messages.to_sentence, status: 401
        end
    end

    private

    def product_params
        params.require(:product).permit(:name, :text)
    end
end
