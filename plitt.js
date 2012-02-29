// ==UserScript==
// @name	PLITT
// @namespace   ryenus.toys
// @include     http://www.google.tld/*
// @include     https://www.google.tld/*
// @Description Enable visiting search result without the redirection overhead
// ==/UserScript==

(function(d) {
	if (! d.forms[0].action.match(/search/)) return;
	var plitt = { timer: 0 };
	d.addEventListener('DOMSubtreeModified', function() {
		if (plitt.timer) return;
		plitt.timer = setTimeout(function() {
			var la = d.getElementsByClassName('l');
			if (la.length > d.getElementsByClassName('plitt').length) {
				for (var i = 0; i < la.length; i++) {
					var l = la[i];
					if (l.previousElementSibling != null) continue;
					l.insertAdjacentHTML("beforebegin",
						"<a href='" + l.href + "' target='_blank' class='plitt'>{*}</a>&nbsp;");
				}
			}
			plitt.timer = 0;
		}, 500);
	}, false);
})(document);

