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
    var endTime = new Date("09 march 2024 9:56:00 GMT+01:00");
    endTime = endTime / 1000;

    var now = new Date();
    now = now / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    
    document.getElementById("days").innerHTML = days ;
    document.getElementById("hours").innerHTML = hours ;
    document.getElementById("minutes").innerHTML = minutes ;
    document.getElementById("seconds").innerHTML = seconds ;
}

setInterval(() => {
    makeTimer();   
}, 1000);

// rate stars Action
function rateStarsAction(selector) {
    
    var ratingStars=document.querySelectorAll(selector)
    ratingStars.forEach((el)=>{
        el.addEventListener("click",function () {
            
            var value = this.getAttribute("data-value")
            ratingStars.forEach((el,index) => {
                if (index<value) {
                    el.classList.add("fa-solid")
                    
                }else{
                    el.classList.remove("fa-solid")
                }
                
            });
        })

    })
    
}


rateStarsAction(".NewProductItems .product1 .fa-star");
rateStarsAction(".NewProductItems .product2 .fa-star");
rateStarsAction(".NewProductItems .product3 .fa-star");
rateStarsAction(".NewProductItems .product4 .fa-star");
rateStarsAction(".NewProductItems .product5 .fa-star");
rateStarsAction(".NewProductItems .product6 .fa-star");


// validation of input



var validationText = document.querySelector(".validation-text");
var inputToValidate = document.querySelector(".input-needtobe-validated");
var submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default button click behavior
    if (!inputToValidate.value.trim()) {
        validationText.style.display = "block";
    }else{
        validationText.style.display = "none";

}})



function validationInputs(myValidationText,inputValidated) {
    
    var validationText = document.querySelector(myValidationText);
    var inputToValidate = document.querySelector(inputValidated);
    
    inputToValidate.addEventListener("keydown",function (e) {
        if(e.keyCode === 13){
            e.preventDefault(); // Prevent default button click behavior
            if (!inputToValidate.value.trim()) {
                validationText.style.display = "block";
            }else{
                validationText.style.display = "none";
        
            }}   
        })
        
}

validationInputs('.validation-text','.input-needtobe-validated');

// validation of cart counter

var productButton=document.querySelectorAll(".addToCart-button")
var cartCounter=document.querySelector(".page-navbar .counter")

cartCounter.innerHTML=(0)

productButton.forEach((el) => {
    el.addEventListener("click",function () {
        cartCounter.innerHTML++
    })    
});


// manage Account Page

var editButton= document.querySelectorAll(".setting-section .fa-pen-to-square")
editButton.forEach( el => {
    el.addEventListener("click",function () {
        var row = this.closest('tr');
        var content=row.querySelector(".setting-section .content")

        var newContent=prompt("update your data")
        
        if(newContent!== null){
            content.textContent=newContent;
        }else{
            content.innerHTML =`Enter data please`
        }
    })
});



