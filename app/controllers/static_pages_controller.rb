class StaticPagesController < ApplicationController
  def root()
    p "in root"
    render :root
  end
end
