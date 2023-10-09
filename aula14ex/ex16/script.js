function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resu = document.getElementById('res')

    if(ini.value.length == 0 || passo.value.length == 0 || fim.value.length == 0 ) {
        window.alert('por favor digite os dados corretamente')
    }else{
        resu.innerHTML = 'contando <br>'
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if(p <= 0){
            window.alert('passo inválido! será considerado passo 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                resu.innerHTML += ` ${c} \u{1F449}`
            }
            resu.innerHTML += `\u{1f3c1}`
        }else {
            for(let c = i; c >= f ; c -= p){
                resu.innerHTML += ` ${c} \u{1F449}`
            }
            resu.innerHTML += `\u{1f3c1}`
        }

        
    }
}