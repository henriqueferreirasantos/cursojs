let num = [6,7,8,1]

num.sort()
num.push(9)
num[2] = 3
let tam =num.length
console.log(`o vetor ${num } tem ${tam} posições`)
console.log(`O segundo valor é ${num[1]}`)
let pos = num.indexOf(12)
if (pos == -1){
    console.log('o valor não existe ')
}else{
    console.log(`O valor 8 está na posiçao ${pos}`)
}
