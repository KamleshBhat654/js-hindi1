const mySym=Symbol("Key")
const user={
    name:"HELLO",
    "Full NAME":"HELLO WORLD",
    [mySym]:"MYKEY",
    age:22,
    location:"MUMBAI",
    email:"hellogoogle.com",
    isloggedIn:false,
    lastlongin: ["MONDAY","SATURDAY"]
}
console.log(user.email);
console.log(user["email"]);
console.log(user["Full NAME"]);
console.log(user[mySym]);

user.greeting=function(){
    console.log("HELLO JS");
    
}
console.log(user.greeting());
user.greeting2=function(){
    console.log(`HELLO,${this["Full NAME"]}`);
}
console.log(user.greeting2());
