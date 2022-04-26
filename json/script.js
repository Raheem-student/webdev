

const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

 form.addEventListener('submit', (e) => {
let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
 }
if (password.value.length <= 6) {
messages.push('Password must be longer than 6 characters')
 }
if (password.value.length >= 20) {
messages.push('Password must be less than 20 characters')
}

if (messages.length > 0) {
  e.preventDefault()
  errorElement.innerText = messages.join(', ')
}
})


var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "image1.webp";
images[1] = "image2.webp";
images[2] = "image3.webp";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;


const caroSlide= document.querySelector('.carousel-slide');
const caroImages= document.querySelectorAll('.carousel-slide img');

const prevBtn= document.querySelector('#prevBtn');
const nextBtn= document.querySelector('#nextBtn');

let counter = 1;
const size = caroImages[0].clientWidth;
caroSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener('click', ()=> {
  caroSlide.style.transition= "transform 0.4s ease-in-out";
  counter++;
  console.log(counter);
  caroSlide.style.transform ='translateX('+ (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
caroSlide.style.transition = "transform 0.4s ease-in-out";
counter--;
caroSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

caroSlide.addEventListener('transitionend', () => {
  if (caroImages[counter].id === 'lastClone') {
  caroSlide.style.transition = "none";
  counter = caroImages.length - 2;
  caroSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (caroImages[counter].id ==='firstClone') {
  caroSlide.style.transition = "none";
  counter = caroImages.length - counter;
  caroSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});


function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
