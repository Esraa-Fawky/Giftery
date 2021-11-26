//                      mouseMovement
var mouseImg= document.getElementById("mouse-img");
document.addEventListener("mousemove",function(e){
    mouseImg.style.left=e.clientX;
    mouseImg.style.top=e.clientY;
})



//                    Occasion section (wedding-recommended)  
$("#moreBtn").click(function () {
    $(".more-imgs").slideToggle(100,function () {
        $("#moreBtn").css("display","none")
    });
})

$("#occasion #close").click(function(){
    $("#lightbox-container").css("display","none")
})

$("#occasion .fa-heart ").click(function(){
    $(this).css("color","red")
})

$("#occasion .fa-heart ").dblclick(function(){
    $(this).css("color","white")
})


//                  Filter(price)

$("#less100").click(function(){
    $(".AllPhoto").addClass("d-none");
    $(".filterP100").removeClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").addClass("d-none");
});
$("#less200").click(function(){
    $(".filterP100").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".filterP200").removeClass("d-none")
})
$("#less300").click(function(){
    $(".filterP100").addClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".filterP300").removeClass("d-none");
})
$("#less400").click(function(){
    $(".filterP100").addClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".filterP400").removeClass("d-none");
})
$("#less500").click(function(){
    $(".filterP100").addClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").removeClass("d-none");
})
$("#allPrice").click(function(){
    $(".filterP100").addClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".AllPhoto").removeClass("d-none");
})


