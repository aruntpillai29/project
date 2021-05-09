var acc = document.getElementsByClassName("accordion11");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active11");
    var panel11 = this.nextElementSibling;
      if (panel11.style.maxHeight) {
        panel11.style.maxHeight = null;
      } else {
        panel11.style.maxHeight = panel11.scrollHeight + "px";
      } 
  });
}
 
