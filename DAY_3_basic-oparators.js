const now = 2023;
const agePapai = now - 1989;
const ageBolai = now - 1988;
console.log("age of papai is:", agePapai,"Age of Bolai is:", ageBolai );
console.log(agePapai * 2, ageBolai / 10, 2 ** 3);

const firstName = 'Priyabrata';
const lastName = 'Dutta';
console.log("Hi myname is ",firstName + ' ' + lastName);//concate the 2 srtings

//assignment oparator

let x = 10 + 5;
x += 10 + 5; // x=x+10
x++;
console.log(x);
x--;
console.log(x);


//comparesion oparator 

console.log(agePapai > ageBolai);

console.log(agePapai >= 10);

console.log(agePapai <= 50);
const isFullAge = agePapai >= 10;
console.log('This is idFullAge',isFullAge);

console.log(now - 1991 > now + 1990 );
