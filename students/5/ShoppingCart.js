const formatCurrency = (dollarAmount) => {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      
    });
    return formatter.format(dollarAmount);
  };
  
  const main = async () => {
    const shoppingCartItems = [1.0, 2.0, 3.0];
    const shoppingCartQuantities = [2, 3, 1];
    console.log(formatCurrency(calculateTotal(shoppingCartItems, shoppingCartQuantities)));
     
  };
  
  const calculateTotal = (
    shoppingCartItems = [],
    shoppingCartQuantities = []
  ) => {
    const arr1 = shoppingCartItems;
    const arr2 = shoppingCartQuantities;
  
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      const product = arr1[i] * arr2[i];
      sum += product;
    }
  
    return sum;
    
  };
  
  main();
  