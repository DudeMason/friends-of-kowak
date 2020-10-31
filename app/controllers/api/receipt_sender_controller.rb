class Api::ReceiptSenderController < ApplicationController

	def create
		ReceiptSenderMailer.send_receipt(params).deliver
		NotificationSenderMailer.send_notification(params).deliver
	end

end
