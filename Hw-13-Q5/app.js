let counts = 0;

$(document).on("keyup", function (e) {
  console.log(e.key);
  if (e.key === "Enter") {
    counts++;
    $(".wrapper").text(counts);
  }
});
