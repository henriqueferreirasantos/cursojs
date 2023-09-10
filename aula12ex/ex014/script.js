function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas !`
    if (hora >= 0 && hora < 12) {
        img.src ='pexels-andre-moura-2768483.jpg' 
        document.body.style.background = 'yellow'
    }else if (hora >= 12 && hora <= 18){
        img.src ='pexels-tom-fisk-18158930.jpg'
        document.body.style.background = 'orange'
    }else{
        img.src ='pexels-james-wheeler-414612.jpg'
        document.body.style.background = 'black'
    }
}
