class Api::ReceiptSendersController < ApplicationController

	def create
		ReceiptSenderMailer.send_receipt(params)
		if response.status === 200 || 201 || 202 || 203 || 204
			NotificationSenderMailer.send_notification(params)
		else
			puts '******************************************************'
			puts '**Neither receipt nor notification emails were sent!**'
			puts '******************************************************'
		end
	end

end
