/*
son of suckerfish menu script from:
http://www.htmldog.com/articles/suckerfish/dropdowns/
 */
 
 sfHover = function() {
	var sfEls = document.getElementById("nav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
			this.style.zIndex=200; //this line added to force flyout to be above relatively positioned stuff in IE
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

/*
http://buckingkitty.wordpress.com/2006/05/22/expandcollapse-blocks-using-css-display-property/
*/
function toggleRows(tableID,rowID) {
	var rows = document.getElementById(tableID).getElementsByTagName("tr");
	for (var i=0; i<rows.length; i++) {
		if (rows[i].getAttribute("class") == rowID) {
			if (rows[i].style.display == '') {
				rows[i].style.display = 'none';
			} else {
				rows[i].style.display = '';
			}
		}
	}
}
