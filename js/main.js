let btnId = document.querySelector("#scrollUp");
let imgs =Array.from(document.getElementsByClassName("img-item")) 
let heart = document.querySelectorAll(".relativeI")
let lightBoxContainer = document.getElementById("lightBoxContainer")
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let close = document.getElementById("close")
let lightBoxItem = document.getElementById("lightBoxItem")
let absoluteI = document.getElementsByClassName("absoluteI")
let relativeI = document.getElementsByClassName("relativeI")
let header = document.getElementById("header")
console.log(heart) 

let currentIndex = 0;
for(let i=0;i<imgs.length;i++){
      imgs[i].addEventListener("click",function(eventInfo){
            currentIndex = imgs.indexOf(eventInfo.target)
            console.log(currentIndex)
            lightBoxContainer.style.display = "flex"
            lightBoxItem.classList.add ("scaleImage")
            var imgSrc = eventInfo.target.src;
            lightBoxItem.style.backgroundImage = `url(${imgSrc})`
            
            
      
})
}
for(let j=0;j<heart.length;j++){
      
      heart[j].addEventListener("click",function(e){
      console.log(e)
            absoluteI[j].style.display = "block"
            

      })
}




close.addEventListener("click" , closeSlider)

// close slider
function closeSlider(){
      lightBoxContainer.style.display = "none";
}

next.addEventListener("click",nextSlider)
// next slider
function nextSlider(){
      currentIndex++
      if(currentIndex == imgs.length){
            currentIndex = 0
      }
      var imgSrc = imgs[currentIndex].src;
      lightBoxItem.style.backgroundImage = `url(${imgSrc})`

}

prev.addEventListener("click",prevSlider)
// next slider
function prevSlider(){
      currentIndex--
      if(currentIndex < 0){
            currentIndex = imgs.length -1
      }
      var imgSrc = imgs[currentIndex].src;
      lightBoxItem.style.backgroundImage = `url(${imgSrc})`

}

document.addEventListener("keydown", function(e){
      console.log(e.keyCode)
      if(e.keyCode == 39){
           nextSlider()
      }
      else if(e.keyCode == 37){
           prevSlider()
      }
      else if(e.keyCode == 27){
           closeSlider()
      }

})
window.onscroll = function(){
      if(window.scrollY >=400){
            btnId.style.display = 'block';
            header.classList.add("headerFixed")
            btnId.addEventListener("click",function(){
                  window.scroll({top:0})
            })
      }
      else
      {
            btnId.style.display = 'none';
            header.classList.remove("headerFixed")

      }
};

