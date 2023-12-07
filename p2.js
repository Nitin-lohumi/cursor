let a = document.getElementById("cursor");
let b = document.getElementById("main");

b.addEventListener("mousemove",function(dets){
    a.style.left=dets.x + "px"
    a.style.top=dets.y + "px"
    
})
