function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  var body = document.querySelector("body");
  var theme = document.querySelector("#theme");

  theme.addEventListener("click",function(){
    var currentTheme = body.getAttribute("class")
    
    if(currentTheme == "light"){
      body.setAttribute("class", "dark")
      theme.innerHTML = `<i class="ri-moon-fill">`;
    }
    else{
      body.setAttribute("class", "light")
      theme.innerHTML = `<i class="ri-sun-fill">`;
    }

  });


