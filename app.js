
btn=document.querySelector(".q");
b=document.querySelector("button");
inp=document.querySelector("input");
e=document.querySelector("#h");
l=document.querySelectorAll("ul li");
dbtn=document.querySelectorAll(".q");




b.addEventListener("click",function(){
s=document.createElement("li");
s.textContent=inp.value;
n=e.appendChild(s);
dbtn=document.createElement("button");
dbtn.innerText="Delete";
n.append(dbtn);



});

e.addEventListener("click",function(event){

let y=event.target.nodeName;
if(y=="BUTTON"){
    let z=event.target.parentElement;
    z.remove();
}
else{
     console.log("dont delete");
}



});




