function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resu = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano .value) > ano){
        window.alert('ERRO! Verifique os dodos e tente novamente !')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','bebe-homem.jpg')
            }else if( idade < 21 ){
                img.setAttribute('src','jovem-homem.jpg')
            }else if(idade < 50){
                img.setAttribute('src','homem-adulto.jpg')
            }else {
                img.setAttribute('src','idoso.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','bebe-mulher.jpg')
            }else if( idade < 21 ){
                img.setAttribute('src','jovem-mulher.jpg')
            }else if(idade < 50){
                img.setAttribute('src','mulher-adulta.jpg')
            }else {
                img.setAttribute('src','idosa.jpg')
            }
        }
        resu.style.textAlign ='center'
        img.style.borderRadius = '50%'
        resu.innerHTML = `Detectamos ${genero} de ${idade} anos`
        resu.appendChild(img)
    }
}