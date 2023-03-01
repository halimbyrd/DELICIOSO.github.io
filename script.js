const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-nav-wrapper');
const iconX = document.querySelector('.fa-x');
const menuCategories = document.querySelectorAll('.menu-category');






hamburgerIcon.addEventListener('click', function() {

    hamburgerIcon.style.display = 'none'
    mobileMenu.style.display = 'block';
})


iconX.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
    hamburgerIcon.style.display = 'block';
    
})


menuCategories.forEach(function(menuCategory) {
    menuCategory.addEventListener('click', function() {
        console.log('hello world')
    })
})












