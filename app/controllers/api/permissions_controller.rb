class Api::PermissionsController < ApplicationController
    before_action :set_user

    def index
        # permission ID and user_id must match in order for user to access permission
        # User must also have the nickname "Editor" (as found in Navbar.js)
        render json: @user.permissions.find(params[:user_id]).description
    end

    private

    def set_user
        @user = User.find(params[:user_id])
    end

	def permission_params
		params.require(:permission).permit(:id, :created_at, :updated_at, :description, :user_id)
	end
end
