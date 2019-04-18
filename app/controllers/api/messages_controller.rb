class Api::MessagesController < ApplicationController
  def index

    @message = Message.find(params[:id])
    @messages= @message.group.messages.where('id > ?', params[:id])
  end
end
