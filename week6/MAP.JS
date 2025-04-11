//.reduce function
const list = [1,2,3,4,5]
const product = list.reduce((acc, curr) => {
    return acc*curr
},1)
console.log(product)
//.filter function
const students =  [{
    name: "Gaius",
    age: 30
},
{
    name:"Onome",
    age: 40
},
{
    name:"Shegezzy",
    age:14
},
{
    name: "Victory",
    age: 18
}]
const adults = students.filter(student =>{
    return student.age >= 18
})

console.log(adults)

//.list include()
const fruits = ["mango", "coconut", "cashew", "pumpkin", "carrot"]
const listInclude = list.includes("coconut")
console.log(listInclude)
