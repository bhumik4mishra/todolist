
let b=[];
let a;

while(true){
    a=prompt("enter ur choice");
if(a=="quit"||a=="3"){
    break;
}

if(a=="1"){
let  j=prompt("enter task to add");
b.unshift(j);

console.log(" task added");
console.log("-----------------");
for(task of b){
    console.log(task);
}
console.log("-----------------");

}
else if(a=="2"){
b.pop();
console.log("removed last task");
console.log("-----------------");
}

else if(a=="4"){
    console.log("TASKS");
for(let i=0;i<b.length;i++){
console.log(b[i]);

    
}



}}
