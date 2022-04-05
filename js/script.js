function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const numeroBombe = 16;
const bombe = [];
let maxTentativi;
let tentativi = 0;

document.getElementById("play").addEventListener("click", play)

//Funzione bottone
function play(evento) {
    evento.preventDefault();
    const livelli = document.getElementById("livelli");
    const wrapper = document.getElementById("wrapper")
    document.getElementById("titolo").setAttribute("class", "d-none");
    document.getElementsByClassName(".tessere");
    if(livelli.value === "1"){
        creaTessere(100)
    }else if(livelli.value === "2"){
        wrapper.innerHTML = ""
        creaTessere(81)
    }else if(livelli.value === "3"){
        wrapper.innerHTML = ""
        creaTessere(49)
    }
}

function generaBombe(num){
    maxTentativi = num - numeroBombe
    while(bombe.length < numeroBombe){
        let numeroBombe = getRandom(1, num);
        if(!bombe.includes(numeroBombe)){
            bombe.push(numeroBombe);
        }
    }
}
//Funzione per creare le tessere
function creaTessere(num){
    for (let i = 1; i <= num; i++){
        let tessera = document.createElement("div");
        tessera.setAttribute("class", "tessera");
        let tessereNum = num
        let tesserePerside = Math.sqrt(tessereNum);
        tessera.style.width = `calc(100% / ${tesserePerside})`;
        tessera.style.height = `calc(100% / ${tesserePerside})`;
        console.log(tessera)
        tessera.innerHTML = i;
        const wrapper = document.getElementById("wrapper");
        wrapper.append(tessera);
    }
    generaBombe(num)
    //Cambia colore alle tessere
    let cambiaColore = document.querySelectorAll(".tessera");
        for(i=0; i < cambiaColore.length; i++){
            let c = i;
            cambiaColore[i].addEventListener("click", colors);
            function colors(){
                let numero = parseInt(this.innerText)
                tentativi++;
                if(bombe.includes(numero)){
                    this.style.backgroundColor = "red"
                    this.innerHTML = `<i class="fa-solid fa-bomb"></i>`
                    fineGioco()
                }else{
                    this.style.backgroundColor = "#663399"
                }
                if(tentativi > maxTentativi){
                    fineGioco()
                }
                cambiaColore[c].classList.add("active");
            }
            function fineGioco(){
                let titolo = document.getElementById("titolo");
                alert("Hai perso")
            }
        }
}
