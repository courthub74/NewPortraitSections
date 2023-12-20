// Make floating scrollbar appear when scrolling up on page from down scroll

// Upon scroll DOWN set opacity to zero
// just toggle the class
// in css give the extra class that sets it to zero

// Upon scroll UP set opacity to one
// just toggle the class
// in css give the extra class that sets it to one

// query the floating nav bar
let floating_nav = document.querySelector('.the_nav_scroll');
// query the main nav bar
let main_nav = document.querySelector('.the_top_nav');

// set a last scroll
let lastScroll = 0;

// FIRST start to be currentScroll = 0;

// add an eventListener to the scroll 
window.addEventListener('scroll', function () {
    // console.log(floating_nav);
    // set a current scroll
    let currentScroll = window.scrollY;
    // compare current scroll to last scroll
        // then compare to greater than zero
        // SO if it's anywhere below the top
    if (currentScroll - lastScroll > 0) {
        // Do stuff with the Navs
        // Make main nav dissapear
        main_nav.classList.add('dissapear');
        // Make floating nav appear
        floating_nav.classList.add('scroll_up');
    } else {
        if (currentScroll === 0) {
            main_nav.classList.remove('dissapear')
            floating_nav.classList.remove('scroll_up');
        }
    }
    // So you are incrementing each scroll
    lastScroll = currentScroll;
});