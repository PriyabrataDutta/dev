const pReduce = [1,2,3,4,5,6,7];

//const hello = pReduce.find(fNum => fNum > 4) ;
const hello = pReduce.findIndex(fNum => fNum > 4);

console.log(hello);

let ages = [18, 22, 25, 63, 45, 78];

//     isPresent = false;
// for (let age of ages){
//     if (age < 18 ){
        
//         isPresent = true;
//         }
// }


console.log(ages.some(age => age > 18));