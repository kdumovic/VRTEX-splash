class PagesController < ApplicationController
  def home
  end

  def join
    if ListMember.create(email: params[:list_member][:email])
      redirect_to root_path
    else
      render "home"
    end
  end
end
