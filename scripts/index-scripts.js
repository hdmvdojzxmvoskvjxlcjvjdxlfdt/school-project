function btn_popup() {
  var btns = document.getElementsByClassName("btn_popup");
  
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var content = this.nextElementSibling;
      changeHtml(content);
    });
  }

  function changeHtml(content) {
    var chlds = content.children;
    var def_element = 0;

    for (var i = 0; i < chlds.length; i++) {
      if (chlds[i].classList.contains("content_video")) {
        document.getElementById("tatarHistory").src = 
          "https://www.youtube-nocookie.com/embed/G47qY9BIZuk?si=LTGSHsAVvE9kLwFz";
        def_element = 1;
      }
    }

    content.style.display = "flex";
    content.style.flexFlow = "column nowrap";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";

    window.onclick = function (event) {   
      if (event.target == content) {
        content.style.display = "none";
        if (def_element == 1) {
          document.getElementById("tatarHistory").src = 
            "";
        }
      }
    };
  }
}

/*всплывающее окно*/
btn_popup();