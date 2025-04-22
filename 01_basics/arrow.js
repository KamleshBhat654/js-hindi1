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