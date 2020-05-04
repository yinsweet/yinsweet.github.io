$(document).ready(function(){
    // Import navigation bar
    $("#topMenuBar").load("topMenuBar.html"); 
    
    $("img").click(function(){
        var img=$(this).attr('src');
        $("#show-img").attr('src',img);
        $("#imgmodal").modal('show');
    });
    
    const toTop = document.querySelector(".to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    })
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