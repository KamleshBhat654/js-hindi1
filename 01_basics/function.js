function addnumber(number1,number2){
    let result=number1+number2;
    return result
}
console.log("RESULT",addnumber(3,5) );
function loggedin(username){
    if(username===undefined){
        console.log("PLEASE ENTER USERNAME");
        return
    }
    return `${username} just loggged in`
}
console.log(loggedin("KAMLESH"));

