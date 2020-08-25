/* function sum(...args)
{
    let result=0;

    for (let arg of args) result += arg;
    return result;
}

let myresult = sum(5,3,55,5,6,5)
console.log(myresult) */

function mydata(x,y,...z){
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(z.length )



}
mydata('adam','sadam','xxxx','yyyyy','zzzzz')