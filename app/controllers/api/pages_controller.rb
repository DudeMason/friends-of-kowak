class Api::PagesController < ApplicationController
	def show
		@page = Page.find(params[:id])
		render json: @page
	end

	def update
		@page = Page.find(params[:id])
		if @page.update(page_params)
			render json: @page
		else render json: {errors: @page.errors}, status: :unprocessable_entity
		end
	end

	private

		def page_params
			params.require(:page).permit(:text1, :text2, :text3, :text4, :text5, :text6, :text7, :text8, :text9)
		end
end
