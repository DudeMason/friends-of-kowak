class Api::PermissionsController < ApplicationController
    before_action :set_user

    def index
        render json: @user.permissions.find(1).description
    end

    private

    def set_user
        @user = User.find(params[:user_id])
    end

	def permission_params
		params.require(:permission).permit(:id, :created_at, :updated_at, :description, :user_id)
	end
end
