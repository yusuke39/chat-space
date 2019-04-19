class Api::MessagesController < ApplicationController
  before_action :set_group_id, only: %i[index]
  def index
    @messages = @group.messages.where('id > ?', params[:id])
  end

  def set_group_id
    @group = Group.find(params[:group_id])
  end
end