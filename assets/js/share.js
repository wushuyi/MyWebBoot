(function(i,s,o,g,r,a,m){
	a=s.createElement(o),m=s.getElementsByTagName(o)[0];
	a.async=1;
	a.src=g;m.parentNode.insertBefore(a,m);
	a.onload = function(){
		html2canvas(document.body, {
			onrendered: function(canvas) {
				var imgSrc = canvas.toDataURL();
				console.log(imgSrc);
			}
		});
	}
})(window,document,"script","http://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js","js");