 Exercicio 2
 let x = 0
 for (let index = 0; index < process.argv.length; index++) {
    if(index>=2){
        x += +process.argv[index]        
    }         
 }
 console.log(x)
