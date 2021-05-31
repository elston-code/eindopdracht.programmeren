// var sus = document.querySelector("img");

// sus.addEventListener("click", function(){
//     kist.src = "images/chest4_open.gif";
// })

// kist.addEventListener("click", openKist)

// function openKist(){
//     kist.src = "images/chest4_open.gif";
//     console.log(kist.src)
// }


var susimg = document.querySelector("#mainbody")
var btns = document.querySelectorAll(".pakje")

var hoeden = document.querySelectorAll("#hoeden button");
var hoedimg = document.querySelector("#classhoed")

var dieren = document.querySelectorAll("#dieren button");
var dierimg = document.querySelector("#classpet")

console.log(susimg)

 

function changeColor(event){
    console.log(susimg.src);
    if(susimg.src == event.target.src){
        // speelt geluid af
        // De image is al geklikt en dan krijg je dus een melding dat het al geklikt is.
        console.log('je hebt deze kleur al gekozen');

    } else {
        // btns.src = event.target.src
        console.log("nu heb je deze kleur gekozen")
        // console.log(event.target.src);
        susimg.src = event.target.src
    }
}

function changeHoed(event){
    // console.log(event);
    // console.log(hoedimg.src);
    // console.log(event.target.src);
    if(hoedimg.src == event.target.src){
        // speelt geluid af
        console.log('je hebt deze hoed al op');
    } else {
        console.log(event.target.dataset);
        hoedimg.style.top = event.target.dataset.top
        hoedimg.style.left = event.target.dataset.left
        hoedimg.style.width = event.target.dataset.width
        hoedimg.src = event.target.src
    }
}

function changeDier(event){
    
    if(dierimg.src == event.target.src){
        // speelt geluid af
        console.log('je hebt deze hoed al op');
    } else {
        console.log(event.target.dataset);
        dierimg.style.right = event.target.dataset.right
        dierimg.style.bottom = event.target.dataset.bottom
        dierimg.style.width = event.target.dataset.width
        dierimg.src = event.target.src
    }
}


// functies linken aan variabele

btns.forEach(btn =>{
    btn.addEventListener("click",changeColor);
})

hoeden.forEach(hoed => {
    hoed.addEventListener("click", changeHoed);
});

dieren.forEach(dier => {
    dier.addEventListener("click", changeDier);
});

let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');

btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/backgroundsus.jpg')";
});

btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/.imposter.jpg')";
});

btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/crewmate.jpg')";
});