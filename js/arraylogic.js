const prompt = require('prompt-sync')({ sigint: true });
var users = [
  { name: 'user1', email: 'demo@gmail.com', password: '545454' },
  { name: 'user2', email: 'sSDSDSDSD', password: 'DFDFDFD' },
  
]

function adduser(){
    var user = {}
    user.name=prompt("enter your name:")
    user.email=prompt("enter your email:")
    user.password=prompt("enter your password:")
    users.push(user);
}

function getuserByEmail(email){
   users.forEach(user=>{
      if(user.email == email){
        console.log(user)
      }
   })
}


function updateAadharByname(name,no){
     users.forEach(user=>{
        if(user.name == name){
            user.addhar = no
        }
     })
}

function getuserswithAadhar(){
    var result=[];
    users.forEach(user=>{
        if(user.addhar != undefined){
            result.push(user)
        }
    })
    return result;
}


// var index = users.indexOf("user2")
// users[1].aadhar = "5444545454545"
updateAadharByname("user2","5656565656")


// adduser()
// adduser()
getuserByEmail("demo@gmail.com")
var resultArray = getuserswithAadhar();


console.log(users)

