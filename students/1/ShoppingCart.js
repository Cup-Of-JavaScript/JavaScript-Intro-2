//
// calculateTotal function goes here
//
const calculateTotal = (shoppingCartItems, shoppingCartQuantities) => {
    let total = 0
    for (let i = 0; i < shoppingCartItems.length; i++) {
        if (typeof (i) == 'number' ) {
            total += shoppingCartItems[i] * shoppingCartQuantities[i]
        }
    }
    return formatCurrency(total)
}

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
