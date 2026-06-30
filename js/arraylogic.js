users = require("./data.json")

function getSaleManger(){
   return users.filter(user=>(user.company.title == "Sales Manager"))
}

function printFullNames(user){
    console.log(user.firstName+" "+user.lastName)
}

getSaleManger().map(printFullNames)
