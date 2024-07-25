const btn= document.getElementById("btn");
const thankYou=document.getElementById("page");
const container=document.getElementById("container");
const rate =document.getElementById("rate")
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const five=document.getElementById("five");
const selected=document.getElementsByClassName("selected")

  
function press(num){
     rate.innerText = num ;
     if (num===1){
          one.style.color="black"
          one.style.backgroundColor="white";
          two.style.backgroundColor="";
          two.style.color="";
          three.style.backgroundColor="";
          three.style.color="";
          four.style.backgroundColor="";
          four.style.color="";
          five.style.backgroundColor="";
          five.style.color="";
     }
     else if(num===2){
          two.style.color="black"
          two.style.backgroundColor="white";
          one.style.backgroundColor="";
          one.style.color="";
          three.style.backgroundColor="";
          three.style.color="";
          four.style.backgroundColor="";
          four.style.color="";
          five.style.backgroundColor="";
          five.style.color="";
     }
     else if(num==3){
          three.style.color="black"
          three.style.backgroundColor="white";
          one.style.backgroundColor="";
          one.style.color="";
          two.style.backgroundColor="";
          two.style.color="";
          four.style.backgroundColor="";
          four.style.color="";
          five.style.backgroundColor="";
          five.style.color="";
     }
     else if(num===4){
          four.style.color="black"
          four.style.backgroundColor="white";
          one.style.backgroundColor="";
          one.style.color="";
          three.style.backgroundColor="";
          three.style.color="";
          two.style.backgroundColor="";
          two.style.color="";
          five.style.backgroundColor="";
          five.style.color="";
     }
     else {
          five.style.color="black"
          five.style.backgroundColor="white";
          one.style.backgroundColor="";
          one.style.color="";
          three.style.backgroundColor="";
          three.style.color="";
          four.style.backgroundColor="";
          four.style.color="";
          two.style.backgroundColor="";
          two.style.color="";
     }
   

}

 function submit(){
          container.style.display="none";
          thankYou.style.display="flex";

 }







