//map() -> The map() method creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method.

// const arr = [5, 1, 2, 3, 4, 5];

// function double (x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }
// const output = arr.map((x)=> x.toString(2))
// console.log(output);


// MAP () 

const numbers =  [1,2,3,4,5,6]

const newArr = numbers.map((n)=>{
    return n * n;
});

// here is an anathor example 

const prices = [4,8,15,16,23,28,48]

prices.forEach((price, i, arr) => {
    arr[i] = price * 0.5
    
});
//once we print this the arr has change
//console.log(prices);

// To over come this 
const discountPrices = [];
prices.forEach((price, i, arr) => {
    discountPrices.push(price * 0.5)
    
});
// console.log("Diacounted Price After Creating the Separate Array",discountPrices);
// console.log ("HI THIS IS AFTER MAP APPLIED", newArr);

//To overcome this
const prices2 = [4,8,15,16,23,28,48]
const discountPrices2 = prices.map((price) =>price * 0.5);
//console.log("Diacounted Price MAP",discountPrices2);

// Example Where you should use the MAP()

const products = [
    {name: "ABC", price: 199, color: "white"},
    {name: "DEF", price: 1199, color: "Blue"},
    {name: "GHI", price: 1299, color: "white"},
    {name: "KLM", price: 999, color: "Brown"},
    {name: "PQR", price: 599, color: "Black"},
    {name: "SOS", price: 299, color: "greay"},
    {name: "OOL", price: 99, color: "white"}
]

const newDiscount = products.map((allProduct)=> {
    return {
        ...allProduct,
        price: allProduct.price * 0.5
    }
 }
);
console.log("Price:",newDiscount);

// you can run many things 

const categorizedProducts = products.map((allProduct)=> {
    let category;
    if (allProduct.price < 100) category = "Budget";
    else if (allProduct.price < 500) category = "Mid Range";
    else category = "Premium";
    return{...allProduct, category};
 }
);
console.log(categorizedProducts);

//Filter : ->

const arr2 = [5,1,2,3,7,9];

// function isOdd(x){
//     return x % 2;
//  }

const output2 = arr2.filter(isOdd => isOdd % 2);

console.log(output2);

console.log("Filter example with Filter method with JS");

const affordableProducts = products.filter(products=> products.price < 200)
const affordableProducts1 = products.filter(products=> {
    return products.color === "white"
})


console.log(affordableProducts);



//Reduce 
// Reduce syntax :-> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const pReduce = [1,2,3,4,5,6,7];

const sum = pReduce.reduce((total, num)=>{
    return total + num
}, 0);

console.log(sum);

const fruits = ['Apple', 'banana','Apple','banna','orange'];

const fruitCount = fruits.reduce((count, fruit)=>{
    count [fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});

console.log(fruitCount);

const arrayOfArray = [[1, 2],[3,4],[5,6]];
console.log(arrayOfArray);

const flattended = arrayOfArray.reduce((acc,arr)=>{
    return acc.concat(arr);
}, []);

console.log(flattended);

// how to calculate the totral price in shopping cart 

const price = [25,26,96,7852];

const totalPrice = price.reduce((total, currentPrice)=>{
    console.log(`${total} + ${currentPrice} = ${total} + ${currentPrice}\n`);
 return total + currentPrice ;
},0);

console.log("Total Price of the products are in your cart is ",totalPrice);

// compleax example of the reduce method 




// To use all this in one programm 

const shoppingProducts = [
{name : "Laptop" , price : 59999, color : "Red", inShoppingCart: true},
{name : "Mouse" , price : 1566, color : "Greay", inShoppingCart: true},
{name : "Del Display 21 inch" , price : 13366, color : "black", inShoppingCart: true},
{name : "HDMI CABLE" , price : 1366, color : "Black", inShoppingCart: true},
{name : "Logitech Keyboard" , price : 366, color : "Red", inShoppingCart: true}    

]

const cartTotalNow = shoppingProducts.filter(p => p.inShoppingCart)
                                    .map(p=>p.price *0.5)
                                    .reduce((total, price)=> {
                                        // console.log (cartTotalNow);
                                        return total + price;
                                    }, 0);

console.log("Your Cart total is ",cartTotalNow);




