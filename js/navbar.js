// Make floating scrollbar appear when scrolling up on page from down scroll

// Upon scroll DOWN set opacity to zero
// just toggle the class
// in css give the extra class that sets it to zero

// Upon scroll UP set opacity to one
// just toggle the class
// in css give the extra class that sets it to one

// query the floating nav bar
// let floating_nav = document.querySelector('.the_nav_scroll');

// query the main nav bar
// let main_nav = document.querySelector('.the_navbar');

// query the top of the page that is sticky (.top_home)
let top_home = document.querySelector('.top_home');

// query the 'you' section
let you_section = document.querySelector('.you');

// set a last scroll
let lastScroll = 0;

// FIRST start to be currentScroll = 0;

// add an eventListener to the scroll 
window.addEventListener('scroll', function () {
    // console.log(main_nav);
    // set a current scroll
    let currentScroll = window.scrollY;
    // compare current scroll to last scroll
        // then compare to greater than zero
        // SO if it's anywhere below the top
    if (currentScroll - lastScroll > 0) {
        top_home.classList.add('dissapear');
        console.log("You are scrolling down");
    } else {
        // scrolled up -- you show
        top_home.classList.remove('dissapear');
        you_section.classList.add('appear');
        console.log("You are scrolling up");
        // Make the you dissapear at top of screen
        if (currentScroll === 0) {
            you_section.classList.remove('appear');
        }
    }
    // set the current scroll to the last scroll
    lastScroll = currentScroll;
});