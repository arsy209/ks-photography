Rails.application.routes.draw do
  root "home#index"

  get "/services" ,to: "services#index"
end
