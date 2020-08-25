/* const names = ['abbas','ali','sataesh','zuber','yunus']

let mydata = names.filter(name => name.includes('a'));
console.log(mydata) */
/* 
const pnames =['xxxxx','yyyyy','zzzzz','sssss'];

const qnames = pnames.filter(function(sname,index){
    return sname,index;
})
console.log(qnames) */
/* 
let names =['jasion','adam','lilly','rossy']

let name = names.filter((name=> name.includes("s")
));

console.log(name);
 */

let myName = [
    {name :'adam ', score:'100'},
    {name :'zubier' ,score :'200'},
    {name :'yunus',score:300}
]

let myList = myName.map(function(number){
    return number.name
    
})
console.log(myList)