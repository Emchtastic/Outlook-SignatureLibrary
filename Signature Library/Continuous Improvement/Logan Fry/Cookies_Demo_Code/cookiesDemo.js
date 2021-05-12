// create a cookie
Cookies.set('theme', 'green');

// create a cookie that expires after one hour
Cookies.set('theme', 'green', {expiry : 3600});

// create a cookie that expires on 1st January 2030
Cookies.set('name', 'Kate Morley', {expiry : new Date(2030, 0, 1)});

// create a cookie that is accessible anywhere on the site
Cookies.set('theme', 'green', {path : '/'});

// create a cookie that is accessible only within the news directory
Cookies.set('country', 'uk', {path : '/news/'});

// retrieve the value of the theme cookie
var theme =  Cookies.get('theme');

// delete the theme cookie
Cookies.clear('theme');

// delete the site-wide theme cookie
Cookies.clear(
    'theme',
    {
      path   : '/',
      domain : '.example.com'
    });


// function to set a cookie to a specific time
function setCookie(c_name,c_value,exdays) {
   var exdate=new Date();
   exdate.setDate(exdate.getDate() + exdays);
   document.cookie=encodeURIComponent(c_name) 
     + "=" + encodeURIComponent(c_value)
     + (!exdays ? "" : "; expires="+exdate.toUTCString());
     ;
}

// function to get all Cookies
var getCookies = function(){
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i=0; i<pairs.length; i++){
    var pair = pairs[i].split("=");
    cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
  }
  return cookies;
}