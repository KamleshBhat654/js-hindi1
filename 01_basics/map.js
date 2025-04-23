const map=new Map()
map.set("IN","INDIA")
map.set("USA","UNITED OF AMERICA")
map.set("FR","FRANCE")
//console.log(map);
for (const [key,value] of map) {
    console.log(key,":-",value);
    
}