//Get window height and width
var height = 0
var width = 0
var lifes = 1
var time = 15
function ajustsSizeWindowGamer(){
    height = window.innerHeight
    width = window.innerWidth
    //console.log(height, width)
}

ajustsSizeWindowGamer()

var cronometer = setInterval(function(){
    time -=1
    if(time < 0){
        clearInterval(cronometer)
        alert("Vitoria") 

    }
    
    else{    
        document.getElementById('cronome').innerHTML = time
    }    
    
}, 1000)

// Positions random mosquitos in window
function randomPosition(){
    // Remove mosquito if exist
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if (lifes > 3){
            window.location.href = "game_over.html"
        }
        else{
            document.getElementById('v' + lifes).src= "images/coracao_vazio.png"
            lifes++
        }
    }
    
    
    var positionX = Math.abs(Math.floor(Math.random() * height) - 200)
    var positionY = Math.abs(Math.floor(Math.random() * width) - 200)
    
    //positionX = positionX < 0 ? 0 : positionX
    //positionY = positionY < 0 ? 0 : positionY  

    console.log(positionX, positionY)

    // Criate Html element
    var mosquito = document.createElement('img')
    mosquito.src = 'images/mosca.png'
    mosquito.className = sizeRandam() + ' ' + sideRandom()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function sizeRandam(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function sideRandom(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'
    }


}



