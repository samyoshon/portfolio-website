$(function(){

// init controller
	var controller = new ScrollMagic.Controller();

	// // build scenes
	new ScrollMagic.Scene({triggerElement: "#second"})
				.setTween("#previousContent", {color: 'white', ease: Linear.easeNone})
				// .addIndicators({name: "1 - no duration"})
				.addTo(controller);
});
