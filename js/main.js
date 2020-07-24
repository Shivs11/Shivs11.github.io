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
    //console.log(documenhttps://fiddle.jshell.net/3urv0tp0/#tidyt.getElementById("child-div").style.top)
    if(document.documentElement.scrollTop>= 550)//Adjust Tolerance as you want
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

