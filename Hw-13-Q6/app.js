const btn=$(".btn")
const text=$("span")
btn.on("click",function(){
    $("#lock").toggle();
    $("#unlock").toggle();
    $("#lockDiv").toggleClass("bg-warning");
    $("#lockDiv").toggleClass("bg-light");
    btn.toggleClass("bg-danger");
    btn.toggleClass("btn-outline-danger");
    btn.hasClass("bg-danger") ? text.text("LOGOUT") : text.text("LOGIN")
})