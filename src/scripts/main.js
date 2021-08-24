  // Script para substituir os elementos ícones pelos svgs Feather
  feather.replace();

  var mainContainer = document.getElementById("main-container");
  /*--==================== SIDE MENU ====================*/
  function openNav(){
    
    mainContainer.style.transform = "translateX(85vw) scaleY(.90)";
    mainContainer.style.borderRadius = "3rem";
    mainContainer.style.boxShadow = "-1.5rem 0 1.5rem rgba(0,0,0,0.15)";
  }

  function closeNav(){
    mainContainer.style.transform = "";
    mainContainer.style.borderRadius = "";
    mainContainer.style.boxShadow = "";
  }
  