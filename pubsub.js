var pubsub = {
  sendMessage: function() {
    message = $("input").val();
    $("body").trigger("messageReceived", { message: message});
    return false;
  },
  displayMessage: function(data) {
    $("body").trigger("messageDisplayed");
    li = $("<li />").text(data.message).css("display", "none");
    $("ul").append(li);
    $("ul>li").last().fadeIn()
  },
  flashMessage: function() {
    $(".flash").text("you've got a new message")
    .fadeIn(500, function() {
      var that = this;
      setTimeout(function() {
        $(that).fadeOut(500);
      }, 2000);
    });
  },
  bindEvents: function() {
    $("form").on("submit",function() {
      pubsub.sendMessage();
      return false;
    });
    $("body").on("messageReceived", function(event,data) {
      pubsub.displayMessage(data);
    });
    $("body").on("messageDisplayed", function(event, data) {
      pubsub.flashMessage();
    });
  },
  init: function() {
    this.bindEvents();
  }
};

$(function() {
  pubsub.init();
});
