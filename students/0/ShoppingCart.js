//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const shoppingCartItems = [1.00, 2.00, 3.00];
    const shoppingCartQuantities = [2, 3, 1];
    console.log(calculateTotal(shoppingCartItems, shoppingCartQuantities))
}



const ex2 = () => { 

}

const ex3 = () => {

}

//
// Your functions here...
//

const calculateTotal = (shoppingCartItems, shoppingCartQuantities) => {
    let retval = 0;
    for (let i = 0; i < shoppingCartItems.length; i++) {
        retval += (shoppingCartItems[i] * shoppingCartQuantities[i])
    }
    return formatCurrency(retval);
}

//
// calculateTotal function goes here
//

const formatCurrency = (dollarAmount) => {
   let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
   return formatter.format(dollarAmount)   
}

const main = async () => {
    const shoppingCartItems = [1.00, 2.00, 3.00];
    const shoppingCartQuantities = [2, 3, 1];
    console.log(calculateTotal(shoppingCartItems, shoppingCartQuantities))
}

main();

