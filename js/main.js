// var sus = document.querySelector("img");

// sus.addEventListener("click", function(){
//     kist.src = "images/chest4_open.gif";
// })

// kist.addEventListener("click", openKist)

// function openKist(){
//     kist.src = "images/chest4_open.gif";
//     console.log(kist.src)
// }


var hoeden = document.querySelectorAll("#hoeden button");
var dieren = document.querySelectorAll("#hoeden button");

var susimg = document.querySelector("#classhoed")
var hoedimg = document.querySelector("#classhoed")

function changeHoed(event){
    console.log(event);
    console.log(hoedimg.src);
    console.log(event.target.src);
    if(hoedimg.src == event.target.src){
        // speel geluid af
        console.log('je hebt deze hoed al op');
    } else {
        console.log(event.target.dataset);
        hoedimg.style.top = event.target.dataset.top
        hoedimg.style.left = event.target.dataset.left
        hoedimg.style.width = event.target.dataset.width
        hoedimg.src = event.target.src
    }
}


hoeden.forEach(hoed => {
    hoed.addEventListener("click", changeHoed);
});

dieren.forEach(dier => {
    dier.addEventListener("click", changeHoed);
});
