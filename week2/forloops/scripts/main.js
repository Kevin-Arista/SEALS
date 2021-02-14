let list = 0;
for (let i = 0; i < 9; i++){
    list = 5 + i;
    console.log(list);
}


let countdown = '';
for (let i = 10; i >= 0; i--){
    countdown = i;
    console.log('countdown' + i);  //if you console.log here, it will show every single iteration of i before it got to the limit
}

//if you console.log here it would show only the last finally iteration of i


let product = 0;
for (let i = 0; i <13; i ++){
    product = 5 * i;
    console.log(product);
}

function getProduct(n){
    let product = 0;
    let timestables = [];
    for (let i = 0; i < 13; i++){
        product = n * i;
        timestables.push(product);
        // console.log(product);
    }
    for (let i = 0; i < 13; i++){
        console.log(timestables[i]);
    }
}

getProduct(12);