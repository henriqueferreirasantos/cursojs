let valores = [4,2,7,6,9,1,]

/*for(pos = 0; pos< valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
    
for(let pos in valores){
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}