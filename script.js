const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-nav-wrapper');
const iconX = document.querySelector('.fa-x');

const menuItems = document.querySelectorAll('.menu-item');
const allItemsBtn = document.querySelector('.all-items-btn');
const lunchBtn = document.querySelector('.lunch-btn');
const dinnerBtn = document.querySelector('.dinner-btn');
const dessertBtn = document.querySelector('.dessert-btn');
const beverageBtn = document.querySelector('.beverage-btn');
const menuSection = document.querySelector('.menu-section');
const menuCategories = document.querySelectorAll('.menu-category');


console.log(beverageBtn);



hamburgerIcon.addEventListener('click', function() {

    hamburgerIcon.style.display = 'none'
    mobileMenu.style.display = 'block';
})


iconX.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
    hamburgerIcon.style.display = 'block';
    
})








function showAllItems() {
    menuItems.forEach(function(item) {
        item.style.display = 'flex';
    }) 
};




function showLunchItems() {
      menuItems.forEach(function(item) {
         if (item.classList.contains('lunch')) {
            item.style.display = 'flex';
            menuSection.style.padding = '1rem'

         } else {
            item.style.display = 'none';
         }
    })
};



function showDinnerItems() {
    menuItems.forEach(function(item) {
       if (item.classList.contains('dinner')) {
          item.style.display = 'flex';
          menuSection.style.padding = '1rem'

       } else {
          item.style.display = 'none';
       }
  })
};





function showDessertItems() {
    menuItems.forEach(function(item) {
       if (item.classList.contains('dessert')) {
          item.style.display = 'flex';
          menuSection.style.padding = '1rem'

       } else {
          item.style.display = 'none';
       }
  })
};





function showBeverageItems() {
    menuItems.forEach(function(item) {
       if (item.classList.contains('beverage')) {
          item.style.display = 'flex';
          menuSection.style.padding = '1rem'

       } else {
          item.style.display = 'none';
       }
  })
};









allItemsBtn.addEventListener('click', showAllItems);

lunchBtn.addEventListener('click', showLunchItems);

dinnerBtn.addEventListener('click', showDinnerItems);

dessertBtn.addEventListener('click', showDessertItems)

beverageBtn.addEventListener('click', showBeverageItems);