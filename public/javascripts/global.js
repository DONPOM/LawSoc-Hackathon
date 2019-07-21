console.log("hi");


$(document).ready(function() {
  console.log("brah");
setTimeout(function(){
    //do what you need here
    console.log("hello");
    document.getElementById("hidden-message").classList.remove("hide-it");
}, 2000);
});
