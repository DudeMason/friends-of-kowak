class PasswordResetSenderMailer < ApplicationMailer

	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby
	require 'sendgrid-ruby'
	include SendGrid

	#@todo: adjust this when the time comes to match the required parameters
	def send_password_reset(params)

		body = I18n.t('password_reset')

		email = {
			'personalizations': [
				{
					'to': [
						{
							'email': params[:email]
						}
					],
					'subject': 'Password Reset'
				}
			],
			'from': {
				'email': 'no-reply@friendsofkowak.com',
				'name': 'Friends of Kowak'
			},
			'content': [
				{
					'type': 'text/html',
					'value': body
				}
			],
			'mail_settings': {
				'sandbox_mode': {
					'enable': true
				}
			}
		}

		mail = JSON.parse(email.to_json)

		# app_email = Email.new(email: 'no-reply@ceojanitorial.com', name: 'CEO Appointments')
		# ceo_email = Email.new(email: 'mason.deyre@gmail.com')
		#
		# from    = app_email
		# to      = ceo_email
		# subject = 'New Appointment Submitted'
		# content = Content.new(type: 'text/html', value: I18n.t('appointment_notification', params: params[:first_name], params2: params[:last_name], params3: params[:phone1], params4: params[:phone2], params5: params[:phone3], var: Date.parse(params[:date]).strftime("%m/%d/%Y"), params6: params[:time], params7: params[:company], params8: params[:message]))
		#
		# mail = Mail.new(from, subject, to, content)

		SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY']).client.mail._('send').post(request_body: mail)

		# puts response.status_code
		# puts response.body
		# puts response.parsed_body
		# puts response.headers

	end
end