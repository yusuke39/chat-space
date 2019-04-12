  $(function(){
    function buildHTML(message){
      var imageBox = "";
      if(message.image){
        imageBox = `<image class="lower-message__image" src=${message.image}>`
      }else{
        imageBox = "";
      }
      var html =`<div class="message">
                <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${message.name}
                  </div>
                  <div class="upper-message__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="lower-meesage">
                  <p class="lower-message__content">
                    ${message.text}
                  </p>
                 ${imageBox}
                </div>
              </div>`       
               return html;
    }
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = location.href
      $.ajax({
        url: url,
        type: "post",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(content){
        var html = buildHTML(content)
        $('.messages').append(html)
        $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight}, 'fast')
      })
      .fail(function(){
        alert('error');
      })
      .always(function(){
        $('.new_message')[0].reset();
        $('.new-message__submit-btn').prop('disabled', false)
      })
    })
  });
