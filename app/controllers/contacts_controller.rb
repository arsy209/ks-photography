class ContactsController < ApplicationController

  def contact
  end

  def create
    data = Contact.new(contact_params)
    ContactMailer.testing(data).deliver_now
    redirect_to root_path

  end

  private

  def contact_params
    params.require(:anything).permit(:name, :email, :phone_number, :body)
  end

end
