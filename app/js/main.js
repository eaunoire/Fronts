// Adding fast click js to document
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

document.addEventListener('DOMContentLoaded', function() {
	AOS.init();
	window.onscroll = function changeColor(){
		var scrollPosY = window.pageYOffset | document.body.scrollTop;
		var header = document.getElementById('header');
		if(scrollPosY > 50) {
			header.className = ('header-onScroll');
		} else if(scrollPosY < 50) {
			header.className = ('');
		}
	}

	var button = document.querySelector('#mbl-btn');
	var menu = document.querySelector('.mobile-menu');
	var toggle = document.querySelector('#toggle-btn');
	var links = document.querySelector('.mbl-links');

	button.addEventListener('click', function(e) {
		menu.classList.toggle('menu-active');

		if(menu.classList.contains('menu-active')) {
			toggle.classList.remove('fa-bars');
			toggle.classList.add('fa-times');
		} else {
			toggle.classList.remove('fa-times');
			toggle.classList.add('fa-bars');
		}

		e.preventDefault();
	}, false);

	var snap = Snap('#main-svg');
	var myPath = snap.path('M11.842,142.418c28.798-6.905,58.144-14.341,83.539-30.164 c10.689-6.66,20.586-14.704,28.855-24.228c4.002-4.609,7.633-9.554,10.754-14.801c2.578-4.335,5.288-9.346,4.196-14.561 c-2.633-12.584-16.35-4.847-22.659-0.258c-9.863,7.175-16.377,17.704-16.348,30.145c0.011,4.489,0.642,9.802,4.498,12.696 c3.564,2.676,8.382,2.443,12.561,1.757c11.691-1.92,23.211-6.212,33.749-11.554c24.991-12.667,45.571-33.114,58.818-57.752 c0.457-0.85-0.837-1.609-1.295-0.757c-10.037,18.668-24.245,34.927-41.585,47.153c-8.513,6.002-17.716,11.06-27.406,14.892 c-4.154,1.643-8.393,3.072-12.699,4.265c-5.388,1.493-11.951,3.673-17.56,2.412c-7.459-1.677-8.028-10.17-7.426-16.443 c0.692-7.214,3.691-14.051,8.553-19.419c3.625-4.003,8.124-7.275,12.801-9.949c4.071-2.327,10.317-4.932,13.557,0.419 c2.22,3.666,1.015,8.235-0.656,11.841c-9.086,19.605-27.826,35.124-46.163,45.659c-24.198,13.902-51.567,20.748-78.483,27.201 C10.505,141.196,10.902,142.643,11.842,142.418L11.842,142.418z').attr({
		id: 'loop',
		fill: 'none',
		strokeWidth: '2',
		stroke: '#FFFFFF',
		strokeMiterLimit: "10",
	    strokeDasharray: "9 9",
	    strokeDashOffset: "988.01"
	});

	var len = myPath.getTotalLength();

	myPath.attr({
		stroke: '#fff',
	 	strokeWidth: '2',
    	fill: 'none',
	    // Draw Path
	    "stroke-dasharray": len + " " + len,
	    "stroke-dashoffset": len
  	}).animate({"stroke-dashoffset": 10}, 2500,mina.easeinout);

  	var Circle = snap.circle(0,0,0);
	  Circle.attr({
	    fill: "#FFF",
	    stroke: "#fff",
	    strokeWidth: '1'
	  });

  	setTimeout( function() {
	    Snap.animate(0, len, function( value ) {
	       movePoint = myPath.getPointAtLength( value );
	       Circle.attr({ cx: movePoint.x, cy: movePoint.y }); // move along path via cx & cy attributes
	    }, 2500,mina.easeinout);
  	});

  	var snapStar = Snap('#main-star');
  	var myStar1 = snap.path('M218.883,9.256c0,4.68,0,9.36,0,14.039c0,0.965,1.5,0.967,1.5,0 c0-4.68,0-9.36,0-14.039C220.383,8.291,218.883,8.289,218.883,9.256L218.883,9.256z').attr({
  		id: 'star1',
  		fill: 'none',
		strokeWidth: '1',
		stroke: '#FFFFFF',
		strokeMiterLimit: "10",
	    strokeDasharray: "9 9",
	    strokeDashOffset: "988.01"
  	});
  	var myStar2 = snap.path('M212.424,17.216c4.806,0,9.613,0,14.419,0c0.965,0,0.967-1.5,0-1.5 c-4.806,0-9.613,0-14.419,0C211.458,15.716,211.457,17.216,212.424,17.216L212.424,17.216z').attr({
  		id: 'star1',
  		fill: 'none',
		strokeWidth: '1',
		stroke: '#FFFFFF',
		strokeMiterLimit: "10",
	    strokeDasharray: "9 9",
	    strokeDashOffset: "988.01"
	});
  	var myStar3 = snap.path('M213.713,23.067c3.794-3.794,7.589-7.589,11.383-11.383 c0.683-0.683-0.377-1.744-1.061-1.061c-3.794,3.794-7.589,7.589-11.383,11.383C211.969,22.69,213.029,23.751,213.713,23.067 L213.713,23.067z').attr({
  		id: 'star1',
  		fill: 'none',
		strokeWidth: '1',
		stroke: '#FFFFFF',
		strokeMiterLimit: "10",
	    strokeDasharray: "9 9",
	    strokeDashOffset: "988.01"
	});
  	var myStar4 = snap.path('M213.791,12.443c3.668,3.668,7.336,7.336,11.004,11.004 c0.683,0.683,1.744-0.377,1.061-1.061c-3.668-3.668-7.336-7.336-11.004-11.004C214.168,10.698,213.107,11.759,213.791,12.443 L213.791,12.443z').attr({
  		id: 'star1',
  		fill: 'none',
		strokeWidth: '1',
		stroke: '#FFFFFF',
		strokeMiterLimit: "10",
	    strokeDasharray: "9 9",
	    strokeDashOffset: "988.01"
	});

  	var len1 = myStar1.getTotalLength();
  	var len2 = myStar2.getTotalLength();
  	var len3 = myStar3.getTotalLength();
  	var len4 = myStar4.getTotalLength();

  	myStar1.attr({
		stroke: '#fff',
	 	strokeWidth: '1',
    	fill: 'none',
	    // Draw Path
	    "stroke-dasharray": len1 + " " + len1,
	    "stroke-dashoffset": len1
  	}).animate({"stroke-dashoffset": 10}, 2500,mina.easeinout);

  	myStar2.attr({
		stroke: '#fff',
	 	strokeWidth: '1',
    	fill: 'none',
	    // Draw Path
	    "stroke-dasharray": len1 + " " + len1,
	    "stroke-dashoffset": len1
  	}).animate({"stroke-dashoffset": 10}, 2500,mina.easeinout);

  	myStar3.attr({
		stroke: '#fff',
	 	strokeWidth: '1',
    	fill: 'none',
	    // Draw Path
	    "stroke-dasharray": len1 + " " + len1,
	    "stroke-dashoffset": len1
  	}).animate({"stroke-dashoffset": 10}, 2500,mina.easeinout);

  	myStar4.attr({
		stroke: '#fff',
	 	strokeWidth: '1',
    	fill: 'none',
	    // Draw Path
	    "stroke-dasharray": len1 + " " + len1,
	    "stroke-dashoffset": len1
  	}).animate({"stroke-dashoffset": 10}, 2500,mina.easeinout);

});