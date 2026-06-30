
var user={
    name:"Ananta shinde",
    age:34,
    city:"CSN",
    hobbies:["reading","gossip"],
    carrerSummary:[
        {
            comapany:"GBSI",
            tenure: 2022-2026,
            designation : "Fullstack Developer",
            summay: "demo"
        },
        {
            comapany:"GBSI",
            tenure: 2022-2026,
            designation : "Fullstack Developer",
            summay: "demo"
        },
        {
            comapany:"GBSI",
            tenure: 2022-2026,
            designation : "Fullstack Developer",
            summay: "demo"
        }
    ]
}

var keyList = Object.keys(user)
console.log(keyList)

keyList.forEach(key=>{
    console.log(key)
})

console.log(Object.values(user))

console.log(Object.entries(user))
console.log("**************************")
console.log(Object.assign(user,{random:"Random value",}))
console.log("**************************")
console.log(Object.defineProperty(user,"salary",{salary:"12225555"}))



