function copyToClipboard(element) {
    var $temp = $("<input>");
    var toast = document.getElementById("ctoast");
    $("body").append($temp);
    $temp.val(arguments[0]).select();
    document.execCommand("copy");
    $temp.remove();
    toast.classList.remove("flyout");
    toast.classList.add("flyin");
  }
  function removecc() {
    var toast = document.getElementById("ctoast");
    toast.classList.remove("flyin");
    toast.classList.add("flyout")
  }
  //Array of images which you want to show: Use path you want.