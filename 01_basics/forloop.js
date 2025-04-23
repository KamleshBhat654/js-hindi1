for(let i=0;i<=10;i++){
    const element=i
    if(element==5){
        console.log(" 5 Number Found");
    }
    console.log(element);
}

let Array=["Hi","Hello","World"]
for (let index = 0; index < Array.length; index++) {
    const element = Array[index];
    console.log(element);
}

for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log(`NUMBER FOUND`);
        continue
    }
    console.log(`Value of i is ${i}`);
    
}