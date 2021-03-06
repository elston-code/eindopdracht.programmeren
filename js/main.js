// Kist opdracht voor inspiratie

// var sus = document.querySelector("img");

// sus.addEventListener("click", function(){
//     kist.src = "images/chest4_open.gif";
// })

// kist.addEventListener("click", openKist)

// function openKist(){
//     kist.src = "images/chest4_open.gif";
//     console.log(kist.src)
// }



// per functie 2 variabele toegevoegd
// 1 voor de image rechts en 1 voor de button links

var susimg = document.querySelector("#mainbody")
var btns = document.querySelectorAll(".pakje")

var hoeden = document.querySelectorAll("#hoeden button");
var hoedimg = document.querySelector("#classhoed")

var dieren = document.querySelectorAll("#dieren button");
var dierimg = document.querySelector("#classpet")

var achtergrondimages = document.querySelectorAll("#achtergronden button");
var body = document.querySelector("body")


// Functie begint als er op een image wordt geklikt

function changeColor(event){
    console.log(susimg.src);
    if(susimg.src == event.target.src){
        // speelt geluid af
        // De image is al geklikt en dan krijg je dus een melding dat het al geklikt is.
        console.log('je hebt deze kleur al gekozen');

        audioplay('audio/error.mp3')

    } else {
        // btns.src = event.target.src
        console.log("nu heb je deze kleur gekozen")
        // console.log(event.target.src);
        susimg.src = event.target.src

        audioplay('audio/succes.mp3')
    }
}

function changeHoed(event){
    // console.log(event);
    // console.log(hoedimg.src);
    // console.log(event.target.src);
    if(hoedimg.src == event.target.src){
        // speelt geluid af
        console.log('je hebt deze hoed al op');

        audioplay('audio/error.mp3')
    } else {
        console.log(event.target.dataset);
        hoedimg.style.top = event.target.dataset.top
        hoedimg.style.left = event.target.dataset.left
        hoedimg.style.width = event.target.dataset.width
        hoedimg.src = event.target.src
        console.log("nu heb je deze hoed gekozen")

        audioplay('audio/succes.mp3')
    }
}

function changeDier(event){
    
    if(dierimg.src == event.target.src){
        // speelt geluid af
        console.log('je hebt deze dier al gekozen');

        audioplay('audio/error.mp3')
    } else {
        console.log(event.target.dataset);
        dierimg.style.right = event.target.dataset.right
        dierimg.style.bottom = event.target.dataset.bottom
        dierimg.style.width = event.target.dataset.width
        dierimg.src = event.target.src
        console.log("nu heb je deze dier gekozen")

        audioplay('audio/succes.mp3')
    }
}

function changeAchtergrond(event){

    // let gebruikt in plaats van een variabel
    let bg = event.target.dataset.bg;

    if(bg == 'imposter'){
        console.log('imposter');
        if(document.body.classList.value == 'imposter-bg'){
            audioplay('audio/error.mp3')
            console.log('error');
        }

        else {
            audioplay('audio/succes.mp3')
            console.log('succes');
            document.body.classList.add('imposter-bg');
            document.body.classList.remove('crew-bg');
            document.body.classList.remove('sus-bg');
            console.log(document.body.classList.value);
        }

    } else if(bg == 'sus'){
        console.log('sus');
        console.log(document.body.classList.value);

        if(document.body.classList.value == 'sus-bg'){
            audioplay('audio/error.mp3')
            console.log('error');
        }

        else {
            audioplay('audio/succes.mp3')
            console.log('succes');
            document.body.classList.add('sus-bg');
            document.body.classList.remove('imposter-bg');
            document.body.classList.remove('crew-bg');

        } 
    
    }else if(bg == 'crewmate'){
        console.log('crewmate');
        
        if(document.body.classList.value == 'crew-bg'){
            audioplay('audio/error.mp3')
            console.log('error');
        }

        else {
            audioplay('audio/succes.mp3')
            console.log('succes');
            document.body.classList.add('crew-bg');
            document.body.classList.remove('imposter-bg');
            document.body.classList.remove('sus-bg');
        }

    }
}

function audioplay(bestand){

    let audio = new Audio(bestand)
    audio.play()
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

achtergrondimages.forEach(bg => {
    bg.addEventListener("click", changeAchtergrond);
});

