Rails.application.routes.draw do
  root "home#index"

  get "/services" ,to: "services#index"
  get "/contacts", to: "contacts#contact"
  post "email_form", to: "contacts#create"
  get "/about_us" ,to: "home#about_us"
  get "/albums" ,to: "portfolio#index"

  resources :portfolio
end
