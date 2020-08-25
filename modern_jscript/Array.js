/* var  numbers =[1,2,3,4,5,6,7,8,9]

var mydata = numbers.filter(function(number)
{
  return number >5
}
);
console.log(mydata) */

/* var mydata = [
    {
       id:101,
       name:'zubier',
       title: 'react JS'

    },
    {
        id:102,
        name:'NAVEEN',
        title: 'ANGULAR JS'
 
     },
     {
        id:101,
        name:'ARUN',
        title: 'NODE  JS'
 
     }

]
var data = mydata.find(function(review)
{
  return review.id == 101,102,103;
}
);
console.log(data) */

 var mydata = [
    {
       id:101,
       name:'zubier',
       title: 'react JS'

    },
    {
        id:102,
        name:'NAVEEN',
        title: 'ANGULAR JS'
 
     },
     {
        id:101,
        name:'ARUN',
        title: 'NODE  JS'
 
     }

]
var data = mydata.filter(function(review)
{
  return review.id == 101,102,103;
}
);
console.log(data)

