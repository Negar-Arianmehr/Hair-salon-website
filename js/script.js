////////////////////////////////////////
/////////////CALENDER//////////////////
///////////////////////////////////////
let cardElement = document.querySelector(".card");

cardElement.addEventListener("click", flip);

function flip() {
    cardElement.classList.toggle("flipped")
}

function startTime() {
    var weekday = new Array();
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var y = today.getFullYear();
    var wd = weekday[today.getDay()];
    var mt = month[today.getMonth()];

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML =
        d;
    document.getElementById('day').innerHTML =
        wd;
    document.getElementById('month').innerHTML =
        mt + "/" + y;

    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    ;
    return i;
}

////////////////////////////////////////
/////////////WELCOM-PICTUR//////////////
///////////////////////////////////////

document.getElementById("welcome__btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("hidden")
})

document.getElementById("close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("hidden")
})

document.querySelector(".popup").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("hidden")
})


////////////////////////////////////////
/////////////NAVIGATION//////////////
///////////////////////////////////////
const x = document.getElementById("navigation")
document.querySelector(".salon-header__collapse-icon").addEventListener("click", function () {
    if (x.className === "salon-header__list-nav") {
        x.className = "salon-header__list-collapse"
        // x.className = "popup"
        document.querySelector("#nav").classList.remove("salon-header__list-nav")
        document.querySelector("#fa").classList.remove("fa-bars")
        document.querySelector("#fa").classList.add("fa-times")
        // document.querySelector(".salon-header__list-nav").classList.add("salon-header__list-collapse")
    } else {
        x.className = "hidden"
        x.className = "salon-header__list-nav"
        document.querySelector("#fa").classList.add("fa-bars")
        document.querySelector("#fa").classList.remove("fa-times")
    }
})

//click on everywhere close the popup
// document.querySelector(".salon-header__list-collapse").addEventListener("click", function () {
//   document.querySelector("#nav").classList.add("hidden")
// })

/////////////////////////////////////////////////
//STICKY NAVIGATION

//SCROLL EVENT IS available IN WINDOW
//So, to scroll event is not really efficient and usually it should be avoided. But again for now, let's use that.
window.addEventListener("scroll", function () {
    console.log(window.scrollY)//shows us in console the position of scroll from top

    if (window.scrollY >= 250) {
        nav.classList.add("salon-header__sticky-nav");
        document.querySelector(".salon-header__logo").style.margin = "1rem"
        // document.querySelector(".salon-header__logo-photo").style.height="2.75rem"
        document.querySelector(".salon-header__collapse-icon").style.top = "0"
        document.querySelector(".salon-header__list-nav").style.margin="1rem 5.25rem 0 0"
    } else nav.classList.remove("salon-header__sticky-nav");
})
//*********************************************
//sticky navigation :Intersection Observer API

// const observer = new IntersectionObserver()
// observer.observe()

// function toggleMenu() {
//     const menuToggle = document.querySelector(".salon-header__toggle-nav")
//     menuToggle.classList.toggle("active")
// }

//////////////////////////////////////////////////////////
//add class for 700px
// $(window).resize(function () {
//
//         if (viewportWidth < 700) {
//             $("#header-contact").removeClass("salon-header__list-contact").addClass("hidden");
//         }
//     });