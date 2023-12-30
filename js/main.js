//////////////////////////
//Hide sidenav on mobile//
//////////////////////////
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("opnbtn").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("topics").style.marginLeft = "0";
    document.getElementById("opnbtn").style.display = "block";
}

/////////////////////////
//Hide navbar on scroll//
/////////////////////////
var lastScrollTop; // This Varibale will store the top position
navbar = document.getElementById("header"); // Get The NavBar
window.addEventListener("scroll", function () {
    //on every scroll this funtion will be called
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //This line will get the location on scroll
    if (scrollTop > lastScrollTop && screen.width > 1280) { //if it will be greater than the previous
        navbar.style.top = "-6rem";
        if (scrollTop > lastScrollTop && screen.width >= 3200) {
            navbar.style.top = "-10rem";
        }
        //set the value to the negetive of height of navbar 
        document.getElementById("mySidenav").style.top = "0";

        let elements = document.getElementsByClassName("sticky");
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].style.top = "0";
        }
    }
    else {
        let elements = document.getElementsByClassName("sticky");
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].style.top = "6rem";
            if (screen.width >= 3200) {
                elements[i].style.top = "10rem";
            }
        }
        navbar.style.top = '0';
        if (screen.width <= 1280) { 
            document.getElementById("mySidenav").style.top = "6rem";
        }
        else { 
            document.getElementById("mySidenav").style.top = "6rem";
            if (screen.width >= 3200) {
                document.getElementById("mySidenav").style.top = "10rem";
            }
        }
    }
    lastScrollTop = scrollTop; //New Position Stored
});

/////////////////////////
//Active Link          //
/////////////////////////
var header = document.getElementById("mySidenav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        //Close sidebar when click link (on mobile)//
        if(screen.width <= 1280) {
            document.getElementById("mySidenav").style.display = "none";
            document.getElementById("topics").style.marginLeft = "0";
            document.getElementById("opnbtn").style.display = "block";
        }
    });
}

/////////////////////////
//Scroll Anchor Offset //
/////////////////////////
// Get the header element
var header1 = document.getElementById("header");
// Get the height of the header
var headerHeight = header1.offsetHeight + 33;
document.querySelectorAll('a[href^="#"]')
.forEach(function (anchor) {
    anchor.addEventListener('click', 
    function (event) {
        event.preventDefault();
        // Get the target element that 
        // the anchor link points to
        var target = document.querySelector(
            this.getAttribute('href')
        );
          
        var targetPosition = target
            .getBoundingClientRect().top - headerHeight + 80;

        window.scrollTo({
            top: targetPosition + window.scrollY,
            behavior: 'smooth'
        });
    });
});


/////////////////////////
//Add <> to tag name   //
/////////////////////////
let tags = document.getElementsByClassName("teg");
for (let i = 0; i < tags.length; i += 1) {
    tags[i].innerHTML = "&lt" + tags[i].innerHTML + "&gt";
}