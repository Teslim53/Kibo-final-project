
disclaimer_button=document.querySelector(".disclaimer");
disclaimer_button.addEventListener('click', ()=>{
  alert('This page is NOT the real macys webpage. This is the final project for kibo students.');
  
})

var back_to_top = document.getElementById('backToTop')

//Attaching click event listener to the anchor tag in the button
back_to_top.querySelector("a").addEventListener("click",(e)=>{
//event.preventDefault() prevents the event from carrying out it's original action, like how the a tag leads to another page, this will stop that, etc
e.preventDefault()
//programmatically scrolling the page(window) to the far top and far left, that's what top:0 and left:0 is doing, behavior smooth gives it the transition effect

     window.scrollTo({
       top:0,
       left:0,
       behavior: 'smooth'
       
     })
   })



const footer = document.querySelector("footer")

const {y:footerTop} = footer.getBoundingClientRect()


window.addEventListener('scroll', ()=>{
  if (window.scrollY > 40){
    back_to_top.style.display = 'block';
    if(window.scrollY > footerTop-window.innerHeight) {

back_to_top.style.backgroundColor = "green"
}else{
      back_to_top.style.backgroundColor = "red"
}


    }
 
  else{
    
    back_to_top.style.display = 'none';
   
  }
  
})

credits_button=document.querySelector(".credits");
credits_button.addEventListener('click', ()=>{
  alert('Creators: Oluwanifemi & Teslim');
})