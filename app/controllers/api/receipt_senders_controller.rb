class Api::ReceiptSendersController < ApplicationController

	def create
		ReceiptSenderMailer.send_receipt(params).deliver
		if response.status === 200 || 201 || 202 || 203 || 204
			NotificationSenderMailer.send_notification(params).deliver
		end
	end

end
