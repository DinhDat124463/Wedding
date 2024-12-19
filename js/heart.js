function createHearts () {
  const heart  = document.createElement("div");
   heart.classList.add("heart","fa","fa-heart")
   heart.style.left = Math.floor(Math.random()*100)+"vw"
   heart.style.animationDuration = Math.floor(Math.random()*2)+4+"s"
  document.body.appendChild(heart)
}
 setInterval(createHearts,200);
   var heart = document.getElementsByClassName("heart")
 setInterval(()=>{
   for (let i = 0; i < heart.length; i++) {
     if (i > 60) {
      heart[0].remove() 
     }   
   }
 },1000)