$(document).ready(function() {
  console.log("here");
$.getJSON( "javascripts/countryList.json", function( matterList ) {
  let select = document.getElementById("subject-matter");
  //populate select with the countries in JSON list
  matterList.matters.forEach(function(matter){
    let option = document.createElement("option");
    option.text = matter.matter;
    option.value = matter.matter;
    select.add(option);
  });
});
});

$("#subject-matter").change(function(){
  //load in list of countries
  $.getJSON( "javascripts/countryList.json", function( matterList ) {
    //clear the old states
    $("#sub-matter").empty();
    let select = document.getElementById("sub-matter");
    //add a blank option
    //select.add(document.createElement("option"));
    //get the currently selected countryList
    matterList.matters.forEach(function(matter){
      if (matter.matter == document.getElementById("subject-matter").value) {
        //populate select with states of the selected country
        matter.sub.forEach(function(sub){
          let option = document.createElement("option");
          option.text = sub;
          option.value = sub;
          select.add(option);
        });
      }
    });
    //set the select to enabled
    document.getElementById("sub-matter").disabled = false;
  });
});
