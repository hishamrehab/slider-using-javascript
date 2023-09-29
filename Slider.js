// Get Slider Items | Array.from [Es6 feature]
var sliderImages =
 Array.from(document.querySelectorAll('.slider-container img'));

// Get number of slides
var slidesCount = sliderImages.length;

// set Current Slide 
var currentSlide = 1;

// slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// previous & next buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


// handle Click on previous ans next buttons
nextButton.onclick =nextSlide;
prevButton.onclick =prevSlide;

// create The main ul element
var paginationElement = document.createElement('ul');

// set id on created ul element
paginationElement.setAttribute('id', 'pagination-ul');

// Create list items based on slides count
for (var i= 1 ; i <= slidesCount ; i++){
    // create the li
var paginationItem = document.createElement('li');

// set custom Attribute 
paginationItem.setAttribute('data-index', i);
  

   //set item content
   paginationItem.appendChild(document.createTextNode(i));

//Append items to the main ul list
paginationElement.appendChild(paginationItem);
}
// Add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement);


// Get the new created ul
var paginationCreatedUl = document.getElementById('pagination-ul')

// Get pagination Items
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items 

for (var i=0; i < paginationBullets.length;i++) {
paginationBullets[i].onclick = function () {
  currentSlide = parseInt(this.getAttribute('data-index'));
  theChecker();
}
}

// trigger the slide function
theChecker();



// Next Slide function
function nextSlide() {

if (nextButton.classList.contains('disabled')) {
return false;
}else {


 currentSlide++;
 theChecker();
}
}
    // previous slide function
function prevSlide() {
  if (prevButton.classList.contains('disabled')) {
    return false;
    }else {
    
    
     currentSlide--;
     theChecker();
    }
}
// create the Checker function
  function theChecker() {
    // Set The Slider Number 
    slideNumberElement.textContent = 
    'slide #' + (currentSlide) +' of ' + (slidesCount);

// Remove ALL Active Classes
    removeAllActive() 
   
    //set Active Class on current slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class on Current pagination Item
    paginationCreatedUl.children[currentSlide - 1]
    .classList.add('active');
 
    // Check if Current Slide is the first
   if (currentSlide==1) {
   // Add disabled Class on previous Button
    prevButton.classList.add('disabled');
 
   }else {
     // Add disabled Class on previous Button
      prevButton.classList.remove('disabled');
   }

      // Check if Current Slide is the first
      if (currentSlide==slidesCount) {
        // Add disabled Class on previous Button
       nextButton.classList.add('disabled');
      
        }else {
          // Add disabled Class on previous Button
          nextButton.classList.remove('disabled');
        }

  }
 
  //Remove All Active Classes From Images and pagination Bullets
  function removeAllActive() {;

  // loop through Images
  sliderImages.forEach(function (img){
    
    img.classList.remove('active');


  });

// loop Through pagination bullets
   paginationBullets.forEach(function(bullet) {

  bullet.classList.remove('active');

   });

  }