let activeHeader = document.getElementById('position');

activeHeader.addEventListener("mouseover", () =>{
    document.getElementById('header').style.backgroundImage="url('/img/hp-oh-hi.png')";
    document.getElementById('basket-icon').src = "img/basket-copy.png";
    document.getElementById('searchbar').style.backgroundColor = "#F7F7F7";
    document.querySelector('input[type=text]').style.setProperty("--c", "black");
    document.getElementById('submit-search').style.backgroundColor = "#F7F7F7";
    document.getElementById('search-icon').src = "img/search-icon-black.png";
    

});
activeHeader.addEventListener("mouseleave", () =>{
    document.getElementById('header').style.backgroundImage="url('img/background-img.png')"; 
    document.getElementById('basket-icon').src = "img/basket-icon.png";
    document.getElementById('searchbar').style.backgroundColor = "rgba(255, 255, 255, 0.24)";
    document.querySelector('input[type=text]').style.setProperty("--c", "white");
    document.getElementById('submit-search').style.backgroundColor = "rgba(255, 255, 255, 0.24)";
    document.getElementById('search-icon').src = "img/search-icon.png";
});
