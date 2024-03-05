function btn_action() {
  var btn = document.getElementsByClassName("collapsible");
  
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      var content = this.nextElementSibling;
      
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}

btn_action();