function GenerateArray(quantidadeDeNumeros) {
    const array = [];
    while(array.length < 8) {
        var random = Math.floor(Math.random() * 60) + 1;
        if(array.indexOf(random) === -1) array.push(random);
    }
    
    console.log(array);
}

GenerateArray(7)