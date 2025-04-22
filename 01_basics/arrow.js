const user={
    username:"KAMLESH",
    price:633,
    welcome:function(){
        console.log(`${this.username} Welcome too the website`);
        console.log(this);
        
        
        
    }

}
user.welcome()
user.username="MS"
user.welcome()
console.log(this);


function chai(){
    console.log(this)
}
chai()
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,5));
const addThree=(num1,num2)=> num1*num2
console.log(addThree(3,5));