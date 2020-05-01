$(document).ready(function(){
    // Import navigation bar
    $("#topMenuBar").load("topMenuBar.html"); 
    
    $("img").click(function(){
        var img=$(this).attr('src');
        $("#show-img").attr('src',img);
        $("#imgmodal").modal('show');
    });
});

function myNavFunc() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    
    var icon = document.getElementById("topnavIcon");
    if (icon.className === "fa fa-bars") {
        icon.className = "fa fa-close";
    } else {
        icon.className = "fa fa-bars";
    }
}