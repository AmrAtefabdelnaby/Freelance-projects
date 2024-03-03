// category dropdwon menu
var categoryButton = document.getElementById("categories-button");
var categoriesMenu = document.getElementById("category-list");
categoryButton.addEventListener("click", function(event) {
  if (categoriesMenu.style.display === "block") {
      categoriesMenu.style.display = "none"
  }else{
      categoriesMenu.style.display = "block"
      PagesList.style.display="none"
        womenClothingList.style.display="none"
        
  }

});

// pages dropdwon menu

var pagesButton=document.getElementById("pages-button")
var PagesList= document.getElementById("Pages-list")
pagesButton.addEventListener("click",function (e) {
    e.preventDefault();
    if (PagesList.style.display==="block") {
        PagesList.style.display="none"
    }else{
        PagesList.style.display="block"
        categoriesMenu.style.display="none"
        womenClothingList.style.display="none"

    }


})


// women clothing dropdwon menu

var womenClothingButton=document.getElementById("womenClothingButton")
var anotherWomenListButton=document.getElementById("anotherWomenListButton")
var womenClothingList=document.getElementById("women-list")

womenClothingButton.addEventListener("click",function (e) {
    e.preventDefault
    if (womenClothingList.style.display==="none") {
        womenClothingList.style.display="block"
    }else{
        womenClothingList.style.display="none"
        categoriesMenu.style.display="none"
        PagesList.style.display="none"


    }
    
})

// another women clothing dropdwon menu
anotherWomenListButton.addEventListener("click",function (e) {
    e.preventDefault
    if (womenClothingList.style.display==="block") {
        womenClothingList.style.display="none"
    }else{
        womenClothingList.style.display="block"
        categoriesMenu.style.display="none"
        PagesList.style.display="none"

    }
    
})
// Active function for main menu items
var mainMenuItem=document.querySelectorAll("#main-navbar li")
mainMenuItem.forEach((el) => {
    el.addEventListener("click", function() {
        mainMenuItem.forEach((item) => {
            item.classList.remove("active");
        });
        el.classList.add("active");
    });
});


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