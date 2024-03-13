 $('#partners-carousel').owlCarousel({
    margin:24,
    loop:true,
//     autoWidth:true,
    responsive:{
        0:{
            items:1
        },
		576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
});

$('#testimonials-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
	autoWidth:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

window.onscroll = function() {myFunction()};
var stats = document.getElementById("stats");
var sticky = stats.offsetTop;
var started_100plus = 0;
var started_10plus = 0;
var started_100 = 0;

function myFunction() {
	if (window.pageYOffset > (sticky-600) && started_100plus == 0 ) {
		started_100plus++;
		localStart_100plus = 10;
		setInterval(function() {
			if (localStart_100plus < 100) {
				localStart_100plus += 10;
				document.getElementById("count-100plus").innerHTML = localStart_100plus;
			}
			else if (localStart_100plus == 100) {
				document.getElementById("count-100plus").innerHTML = "100+";
			}
		}, 50);
	}
	
	if (window.pageYOffset > (sticky-600) && started_10plus == 0 ) {
		started_10plus++;
		localStart_10plus = 1;
		setInterval(function() {
			if (localStart_10plus < 10) {
				localStart_10plus++;
				document.getElementById("count-10plus").innerHTML = localStart_10plus;
			}
			else if (localStart_10plus == 10) {
				document.getElementById("count-10plus").innerHTML = "10+";
			}
		}, 50);
	}
	
	if (window.pageYOffset > (sticky-600) && started_100 == 0 ) {
		started_100++;
		localStart_100 = 10;
		setInterval(function() {
			if (localStart_100 < 100) {
				localStart_100 += 10;
				document.getElementById("count-100").innerHTML = localStart_100;
			}
		}, 50);
	}
}