
// PODCAST TYPING ANIMATION
    setTimeout(function() {
		$("h1").text("N");
	}, 200);

	setTimeout(function() {
		$("h1").text("NM");
    }, 400);

	setTimeout(function() {
		$("h1").text("NMC");
	}, 600);

	setTimeout(function() {
		$("h1").text("NMCE");
	}, 800);

	setTimeout(function() {
		$("h1").text("NMCEW");
	}, 1000);

	setTimeout(function() {
		$("h1").text("NMCEWL");
	}, 1200);

	setTimeout(function() {
		$("h1").text("NMCEWL P");
	}, 1400);

	setTimeout(function() {
		$("h1").text("NMCEWL PO");
    }, 1600);

	setTimeout(function() {
		$("h1").text("NMCEWL POD");
	}, 1800);

	setTimeout(function() {
		$("h1").text("NMCEWL PODC");
    }, 2000);

    setTimeout(function() {
		$("h1").text("NMCEWL PODCA");
    }, 2200);

    setTimeout(function() {
		$("h1").text("NMCEWL PODCAS");
    }, 2400);

    setTimeout(function() {
		$("h1").text("NMCEWLPODCAST");
    }, 2600);

    setTimeout(function() {
		$("h1").text("NMCEWL PODCASTS");
    }, 2800);

    setTimeout(function() {
		$("h1").text("NMCEWL PODCASTS!");
	}, 3000);

// FADE IN ALBUM PICS

	$("img#episode_1").hide();

	setTimeout(function() {
		$("img#episode_1").fadeIn();
	}, 500);

	$("img#episode_2").hide();

	setTimeout(function() {
		$("img#episode_2").fadeIn();
	}, 1000);

	$("img#episode_3").hide();

	setTimeout(function() {
		$("img#episode_3").fadeIn();
	}, 1500);

	$("img#episode_4").hide();

	setTimeout(function() {
		$("img#episode_4").fadeIn();
	}, 2000);

	$("p#album_cover_text").css({
		"color": "#f45b69";
		"text-align": "center";
	});


// ANIMATE

	$("h2#pg_3_home_button").css('position', 'absolute');

	$("h2#pg_3_home_button").animate({
    	"top": "100px";
    	"right": "20px";
	}, 2000);

});
