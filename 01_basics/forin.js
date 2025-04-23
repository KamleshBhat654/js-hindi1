const myObject={
    js:"JAVASCRIPT",
    cs:"C SHARP",
    rb:"RUBY"
}
for (const key in myObject) {
   //console.log(`${key} is Shortcut for ${myObject[key]}`);
}
const programming=["js","cs","rb","html"]
for (const key in programming) {
   console.log(`${key}:${programming[key]}`);
}