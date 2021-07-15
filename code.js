//AndrewChicken's Paladins Randomizer

//Tool that returns if the user is on a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

//Cookies
function setCookie(cname, cvalue) {
	document.getElementById("newName").focus();
	document.getElementById("newName").value = "";
	document.getElementById("newCategory").value = "";
	if (cname.indexOf("|") == 0 || cname.indexOf("|") == cname.length-1) {
		document.getElementById("error").innerHTML = "Please fill in both boxes.";
	} else {
		  var d = new Date();
		  d.setTime(d.getTime() + (1825*24*60*60*1000));
		  var expires = "expires=" + d.toGMTString();
		  document.cookie =  + "=" + cvalue + ";" + expires + ";path=/";
	}
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Delete a cookiefunction setCookie(cname,cvalue,exdays)
function deleteCookie(cname) {
  document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}

function hideCookies() {
	document.getElementById("cookies").style.height = "0px";
}

//Run this on startup
function init() {
	//Test alert
	//alert("This is working.");
	setCookie("darkmode","true");
	alert(getCookie("darkmode");
	
};