

$(document).ready(function() {
setTimeout(function(){
    //do what you need here]
    document.getElementById("hidden-message").classList.remove("hide-it");
}, 2000);
});

function showCaseDetails() {
  document.getElementById("case-valid").classList.remove("hide-it");
  document.getElementById("case-details").classList.remove("hide-it");
}
