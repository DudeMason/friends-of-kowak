class ReceiptSenderMailer < ApplicationMailer

	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby
	require 'sendgrid-ruby'
	include SendGrid

	def send_receipt(params)

		mail = JSON.parse("{
			'personalizations': [
        {
          'to': [
            {
              'email': '#{params[:email]}'
            }
          ],
          'subject': 'Donation Receipt!'
        }
      ],
      'from': {
        'email': 'no-reply@friendsofkowak.com'
				'name': 'Friends of Kowak'
      },
      'content': [
        {
          'type': 'text/html',
          'value': #{I18n.t('payment_submitted', params: params[:first_name], params2: params[:last_name], params3: params[:phone1], params4: params[:phone2], params5: params[:phone3], var: Date.parse(params[:date]).strftime("%m/%d/%Y"), params6: params[:time], params7: params[:company], params8: params[:message])}
        }
      ],
			'mail_settings': {
				'sandbox_mode': {
					'enable': true
				}
			}
		}")

		# kowak_email = Email.new(email: 'no-reply@friendsofkowak.com', name: 'Friends of Kowak')
		# client_email = Email.new(email: "#{params[:email]}")
		#
		# from = kowak_email
		# to = client_email
		# subject = 'Thank You For Your Donation!'
		# content = Content.new(type: 'text/html', value: I18n.t('payment_submitted', params: params[:first_name], params2: params[:last_name], params3: params[:phone1], params4: params[:phone2], params5: params[:phone3], var: Date.parse(params[:date]).strftime("%m/%d/%Y"), params6: params[:time], params7: params[:company], params8: params[:message]))
		#
		# mail = Mail.new(from, subject, to, content)

		sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
		response = sg.client.mail._('send').post(request_body: mail)
		puts response.status_code
		puts response.body
		puts response.parsed_body
		puts response.headers

		# if response.status_code === 200
		# 	NotificationSenderMailer.send_notification(params).deliver
		# end

	end
end
