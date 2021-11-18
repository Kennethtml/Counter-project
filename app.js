var increase=document.querySelector(".increase");
var decrease= document.querySelector(".decrease")
var reset= document.querySelector(".reset")
const value = document.querySelector("#value")
let i=0;
increase.addEventListener("click", function(){
    i++ ;
    value.innerHTML=i
    checker()

    
})
decrease.addEventListener("click", function(){
    i-- ;
    value.innerHTML=i
    checker()
    
})

reset.addEventListener("click",function(){
    i=0;
    value.innerHTML=i
    checker()
})

function checker(){if(i>0){
    value.style.color="green"
}
else if(i<0){
    value.style.color="red"
    
}
else{
    value.style.color="black"
}}



// let count=0;
// const value = document.querySelector("#value");
// const btns =document.querySelectorAll(".btn");
// btns.forEach(function (btn){
//     btn.addEventListener("click", function(e){
//         const styles =e.currentTarget.classList
//         console.log(styles)
       
        
//     })

// })
 