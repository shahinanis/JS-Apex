
//CSS => Inline

#myIR tr.is-clicked td {
  background-color: #000000 !important;
  color: #fff;
}

//Execute when Page Loads

$(document).on("click", "#myIR td", function () {
  // remove from all rows first
  $("#myIR tr").removeClass("is-clicked");
  
  // add to clicked row
  $(this).closest("tr").addClass("is-clicked");
});