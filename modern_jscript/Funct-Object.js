
let viglins ={
    name :'sabari',
    crimno: 1548,
    branch:'chennai',
    area : 'valarasavakkam',
    contact: 9875462312,

}

let getInfo = function(notice){
    return {
        getInfo: `my name is ${notice.name} my_no is ${notice.crimno} station ${notice.branch} `,
        getArea: ` control area ${notice.area}  urgent pls call ${notice.contact}` 
    }
}
let myCall = getInfo(viglins)
console.log(myCall.getInfo)
console.log(myCall.getArea)
