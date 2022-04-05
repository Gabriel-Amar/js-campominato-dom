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
        let tessereNum = 100
        let tesserePerside = Math.sqrt(tessereNum);
        
    }else if(livelli.value === "2"){
        wrapper.innerHTML = ""
        creaTessere(81)
        let tessereNum = 81
        let tesserePerside = Math.sqrt(tessereNum);
        
    }else if(livelli.value === "3"){
        wrapper.innerHTML = ""
        creaTessere(49)
        
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
    //Cambia colore alle tessere
    let cambiaColore = document.querySelectorAll(".tessera");
        for(i=0; i < cambiaColore.length; i++){
            let c = i;
            cambiaColore[i].addEventListener("click", colors);
            function colors(){
                cambiaColore[c].classList.add("active");
            }
        }
}
