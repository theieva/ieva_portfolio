/* Toggle mobile  menu */
function showMobileMenu() {
    let mobileLinks = document.getElementById("nav_link_container");
    if (mobileLinks.style.display === "block") {
      mobileLinks.style.display = "none";
    } else {
      mobileLinks.style.display = "block";
    }
  }

  