// d3.selectAll().on("change", ); creates an event listener that triggers the custom function every time a change takes place to the 
// HTML element specified by selectAll()

d3.selectAll("body").on("change", updatePage);


function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};