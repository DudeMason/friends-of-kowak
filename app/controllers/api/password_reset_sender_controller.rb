class Api::PasswordResetSenderController < ApplicationController

	def create
		PasswordResetSenderMailer.send_password_reset(params).deliver
	end

end
