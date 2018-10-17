class ContactMailer < ActionMailer::Base
  default from: 'testemailforapp007@gmail.com'


  def testing(data)
    @data = data
    mail(:to => 'testemailforapp007@gmail.com', :subject => "Client ", :multipart => true)
  end

end
