var sus = document.querySelector("img");

sus.addEventListener("click", function(){
    kist.src = "images/chest4_open.gif";
})

kist.addEventListener("click", openKist)

function openKist(){
    kist.src = "images/chest4_open.gif";
    console.log(kist.src)
}

