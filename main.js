/* Toggle mobile  menu */
function showMobileMenu() {
    let mobileLinks = document.getElementById("nav_link_container");
    if (mobileLinks.style.display === "block") {
      mobileLinks.style.display = "none";
    } else {
      mobileLinks.style.display = "block";
    }
  }

/* Click to open encoded email address */

function secretEmail(){
  var localURL = window.atob("bWFpbHRvOmlldmFAZ3JleWVway5jb20=");
    location.href = localURL;
  }
  

  