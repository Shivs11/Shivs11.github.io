


$(document).ready(function(){

    $nav = $('.nav');
    console.log($nav)
    $toggleCollapse = $('.toggle-collapse');

    /* click event on toggle menu */

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })

});


/* Typewriter effect */


const typewriter = function(txtelement, words, wait = 3000){
    this.txtelement = txtelement
    this.words = words
    this.txt = ''
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10)
    this.type()
    this.isDeleting = false

}



// Type Method,


typewriter.prototype.type = function(){

    // Current index of words.

    const current = this.wordIndex % this.words.length;
    

    // Get text of the word.
    const fulltxt = this.words[current]

    // Check if deleting

    if(this.isDeleting){
        // Remove char
        this.txt = fulltxt.substring(0,this.txt.length - 1)
    }else{
        // Add char.
        this.txt = fulltxt.substring(0,this.txt.length + 1)
    }


    // Insert txt into element.
    this.txtelement.innerHTML = `<span class="txt">${this.txt}</span>`; 

    // Type Speed.
    let typeSpeed = 100;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    // Check to see if word is complete?

    

    if(!this.isDeleting && this.txt === fulltxt){
        // Pause for a brief moment
        typeSpeed = this.wait
        this.isDeleting = true

    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false
        // Move to the next word.

        this.wordIndex += 1
        // Pause for a bit too?
        typeSpeed = 100
    }
    setTimeout(() => {
        this.type()
    }, 110);
}

// Init on DOM Loading.

document.addEventListener('DOMContentLoaded', init);

function init(){
    const txtelement = document.querySelector('.txt-type')
    const words = JSON.parse(txtelement.getAttribute('data-words'))
    const wait = txtelement.getAttribute('data-wait')

    // Init typewriter
    new typewriter(txtelement, words, wait)

}




// Scrolling effect for working-on.

var body=document.getElementsByTagName("body")[0];
var parent=document.getElementsByClassName('space')
var child=document.getElementsByClassName('working-on');
var heading = document.getElementById('working-heading');

// Project1 - Chat Time.
var project1_heading = document.getElementById('project1-heading')
var parent2 = document.getElementsByClassName('project1')

body.onscroll = function(){
    console.log(document.documentElement.scrollTop)
    console.log("HEY")
    //console.log(documenhttps://fiddle.jshell.net/3urv0tp0/#tidyt.getElementById("child-div").style.top)


    if(document.documentElement.scrollTop >= 2400){
  
        document.getElementsByClassName('animated-title').style.display = 'block'
       
    }
    else if(document.documentElement.scrollTop>= 550)//Adjust Tolerance as you want
    {
        $(document).ready(function() {
            $('#working-heading').fadeIn(500);
            
        });        
        
    }

    
    else if(document.documentElement.scrollTop <= 600){
        $(document).ready(function() {
            $('#working-heading').fadeOut(500);
        });       
    }

};


// Code to show Project number 2.

// Only run for big screens though.
/*
if(screen.width > 1000){
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 2600) {
      $('.animated-title').fadeIn();
    } else if(y >3200) {
      $('.animated-title').fadeOut();
    }
    else{
        $('.animated-title').fadeOut();
    }
  });
}

*/

if(screen.width > 1500){
window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("fourth-card");
  if (window.scrollY >= (elementTarget.offsetTop)) {
    //var y = $(this).scrollTop();
    //if (y > 2600) {
    $('.animated-title').fadeIn();
    //if(y >3200) {
    //$('.animated-title').fadeOut();
    //}
  }
  else if(window.scrollY >= (elementTarget.offsetTop)){
    $('.animated-title').fadeOut();
  }
  }
)};





if(screen.width > 500){
  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("fifth-card");
    if (window.scrollY >= (elementTarget.offsetTop)) {
      //var y = $(this).scrollTop();
      //if (y > 2600) {
      $('.animated-title').fadeIn();
      //} else if(y >3200) {
      //$('.animated-title').fadeOut();
    }
    else{
      $('.animated-title').fadeOut();
    }})}




// IPhones and other mobile devices.
if(screen.width < 500){

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("fifth-card");
    if (window.scrollY >= (elementTarget.offsetTop)) {
      //var y = $(this).scrollTop();
      //if (y > 2600) {
      $('.animated-title').fadeIn();
      //} else if(y >3200) {
      //$('.animated-title').fadeOut();
    }
    else{
      $('.animated-title').fadeOut();
    }
})}






  var words = document.getElementsByClassName('word');
  var wordArray = [];
  var currentWord = 0;
  
  words[currentWord].style.opacity = 1;
  for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }
  
  function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }
    
    for (var i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }
    
    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
  }
  
  function animateLetterOut(cw, i) {
    setTimeout(function() {
          cw[i].className = 'letter out';
    }, i*8);
  }
  
  function animateLetterIn(nw, i) {
    setTimeout(function() {
          nw[i].className = 'letter in';
    }, 340+(i*8));
  }
  
  function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
      var letter = document.createElement('span');
      letter.className = 'letter';
      letter.innerHTML = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }
    
    wordArray.push(letters);
  }
  
  changeWord();
  setInterval(changeWord, 2200);
  

  $(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 8500){
        $('.heading-for-resume').fadeIn();
       }

       if($(this).scrollTop < 8500){
        $('.heading-for-resume').fadeOut
       }
    });
 });




  
