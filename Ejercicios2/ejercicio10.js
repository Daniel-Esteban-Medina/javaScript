let divisibleEntreOtro = false;
for(let i = 2; i <= 100; i++){
    for(let j = 2; j < i; j++){
        if(i != j && (i%j) == 0){
            divisibleEntreOtro = true;
        }
    }
    if(!divisibleEntreOtro){
        console.log(i);
    }
    divisibleEntreOtro = false;
}