function userList(user){
  var html =
  ` <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
    </div>`
    $('#user-search-result').append(html)
    return html
}

function noUserList(user){
  var html = 
  ` <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user}</p>
    </div>`
  $('#user-search-result').append(html);
}

function addUserToList(user_id, name){
  var html =
  `<div class='chat-group-user clearfix js-chat-member'>
    <input name='group[user_ids][]' type='hidden' value=${user_id}>
    <p class='chat-group-user__name'>${name}</p>
    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
  </div>
  `
  $('.js-add-user').append(html);
}

$(function(){
  $('#user-search-field').on('keyup', function() {
    var input =  $(this).val();

      $.ajax({  
        type: 'get',
        url: '/users',
        data: {keyword: input},
        dataType: 'json'
      })

      .done(function(user){  
        $('#user-search-result').empty();
        if (user.length !== 0){
        user.forEach(function(user){
        userList(user);
          });
        }
        else {
          noUserList('ユーザー検索に失敗しました。');
        }
      })
    .fail(function(){
      alert('エラー');
    })
  })
});

$(function(){
  $(document).on('click', '.user-search-add', function(){
    var user_id = $(this).attr('data-user-id');
    var name = $(this).attr('data-user-name');
    $(this).parent().remove();
    addUserToList(user_id, name);
  });

   $(document).on('click', '.user-search-remove', function(){
     $(this).parent().remove();
 });
});
