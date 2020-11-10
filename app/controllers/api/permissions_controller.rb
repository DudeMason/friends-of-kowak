class Api::PermissionsController < ApplicationController
    before_action :set_user

    def index
        if @user.permissions[0].description === "editor"
            render json: true
        end
    end

    private

    def set_user
        @user = User.find(params[:user_id])
    end

	def permission_params
		params.require(:permission).permit(:id, :created_at, :updated_at, :description, :user_id)
	end
end
