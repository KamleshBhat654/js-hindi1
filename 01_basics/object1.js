const user={};
user.id="123abc"
user.name="KAMLESH"
console.log(user);
const User1={
    email:"abc@gmail.com",
    fulllname:{
        userfullname:{
            firstname:"KAMLESH",
            lastname:"BHAT"
        }
    }
}
console.log(User1.fulllname);

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
console.log(Object.keys(user));
console.log(Object.entries(user));
console.log((Object.values(user)));
