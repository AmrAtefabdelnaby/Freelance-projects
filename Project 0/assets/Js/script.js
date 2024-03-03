// setup item name to the button
function setupItemsToButton(items,buttonId) {
    var button = document.getElementById(buttonId);
    items.forEach((el) => {
        el.addEventListener("click",function () {
            
            button.innerHTML=el.innerHTML
        })
    });
    
}

// lang menu
var langItems = document.querySelectorAll('.lang-item');
setupItemsToButton(langItems,"lang-button")



// currency menu
var currencyItems = document.querySelectorAll('.curr-item');
setupItemsToButton(currencyItems,"currency-button")


// filter menu
var filterItems = document.querySelectorAll('.filter-item');
setupItemsToButton(filterItems,"filter-button")
    
// =========================================


// menus toggle
function toggleMenu(menu, button, otherMenus) {
        button.addEventListener("click", function() {
        
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
                // Hide other menus
                otherMenus.forEach(function(otherMenu) {
                    otherMenu.style.display = "none";
                });
            }


        });
    
        document.addEventListener("click", function(event) {
            if (!menu.contains(event.target) && !button.contains(event.target)) {
                menu.style.display = "none";
            }
        });
    }
    
    // Category Dropdown Menu
    var categoryButton = document.getElementById("categories-button");
    var categoriesMenu = document.getElementById("category-list");
    toggleMenu(categoriesMenu, categoryButton, []);
    
    // Pages Dropdown Menu
    var pagesButton = document.getElementById("pages-button");
    var PagesList = document.getElementById("Pages-list");
    toggleMenu(PagesList, pagesButton, []);
    
    // Phones & Jewelry Dropdown Menu
    var phonesButton = document.getElementById("phonesbutton");
    var phonesList = document.getElementById("phones-list");
    phonesButton.addEventListener("click",function () {
        if (phonesList.style.display==="flex") {
            phonesList.style.display="none"
        }else{
            phonesList.style.display="flex"
        }
    })

    document.addEventListener("click", function(event) {
        if (!phonesList.contains(event.target) && !phonesButton.contains(event.target)) {
            phonesList.style.display = "none";
        }
    });
    // Women Clothing Dropdown Menu
    var womenClothingButton = document.getElementById("womenClothingButton");
    var womenClothingList = document.getElementById("women-list");
    toggleMenu(womenClothingList, womenClothingButton, [phonesList, anotherWomenClothingList]);
    
    // Another Women Clothing Dropdown Menu
    var anotherWomenListButton = document.getElementById("anotherWomenListButton");
    var anotherWomenClothingList = document.getElementById("another-women-list");
    toggleMenu(anotherWomenClothingList, anotherWomenListButton, []);
    
    // Man List Dropdown Menu
    var menListButton = document.getElementById("menlist-button");
    var menList = document.getElementById("men-list");
    toggleMenu(menList, menListButton, []);
    






// Active function for Category menu items

var categoryListItem = document.querySelectorAll("#category-list li")
categoryListItem.forEach((el) => {
    el.addEventListener("click", function() {
        categoryListItem.forEach((item) => {
            item.classList.remove("active");
        });
        el.classList.add("active");
    });
});



// altCategories menu action

var altCategoriesMenu = document.getElementById("altCategoriesMenu")

function toggleCategoryMenu() {
    if(altCategoriesMenu.style.display==="block"){
        altCategoriesMenu.style.display="none"
    }else{
        altCategoriesMenu.style.display="block"

    }

}

// toggle women clothing menu
var altwomenclothing = document.getElementById("altwomenclothing")
function togglewomenclothingmenu() {
    if(altwomenclothing.style.display==="block"){
        altwomenclothing.style.display="none"
    }else{
        altwomenclothing.style.display="block"

    }
}


// toggle Men clothing menu
var altMenMenu= document.getElementById("altMenMenu")
function toggleMenMenu() {
    if(altMenMenu.style.display==="block"){
        altMenMenu.style.display="none"
    }else{
        altMenMenu.style.display="block"

    }
}

// toggle alt Pages Menu

var altPagesMenu = document.getElementById("altPagesMenu")
function toggleAltPagesmenu() {
    if(altPagesMenu.style.display==="block"){
        altPagesMenu.style.display="none"
    }else{
        altPagesMenu.style.display="block"

    }
}


// closing of main sidebar button
var altMainSidebar = document.getElementById("altMainSidebar");
var closeButton = document.getElementById("close-sidebar");

closeButton.addEventListener("click", function() {
    altMainSidebar.style.display = "none";
});

function toggleAltsidebar(){
    altMainSidebar.style.display = "block";

}


// top collections slider
var topCollectionItems = document.querySelectorAll(".topCollectionsSlider .item")

topCollectionItems.forEach((el) => {
    var itemText= el.querySelector(".topCollectionsSlider .item .item-text")
    var itemButton= el.querySelector(".topCollectionsSlider .item .item-button")
    var adsLogo=el.querySelector(".topCollectionsSlider .item .ads-logo")
    
    el.addEventListener("mouseenter",function () {
        
        itemText.style.display="block"
        itemButton.style.display="block"
        adsLogo.style.display="none"
        
    })
    
    el.addEventListener("mouseleave",function () {
        itemText.style.display="none"
        itemButton.style.display="none"
        adsLogo.style.display="block"
        
    })
    
});




// timer
function makeTimer() {
    var endTime = new Date("15 September 2024 9:56:00 GMT+01:00");
    endTime = endTime / 1000;

    // Get the current time
    var now = new Date();
    now = now / 1000;

    // Calculate the time remaining
    var timeLeft = endTime - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    

    // Update HTML elements
    document.getElementById("days").innerHTML = days ;
    document.getElementById("hours").innerHTML = hours ;
    document.getElementById("minutes").innerHTML = minutes ;
    document.getElementById("seconds").innerHTML = seconds ;
}

setInterval(() => {
    makeTimer();   
}, 1000);

