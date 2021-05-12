function createCookie(title, signature) {
    var date = new Date();
    date.setTime(date.getMonth() + 1200);
    var expires = "expires=" + date.toGMTString();
    document.cookie = title + "=" + signature + ";" + expires + ";path=/";
}

function readCookie(name) {
    var key = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(key) == 0) {
            return cookie.substring(key.length, cookie.length);
        }
    }
    return null;
}

function deleteCookie(name) {
    var date = new Date();
    date.setTime(date.getMonth() - 1);
    var expires = "expires=" + date.toGMTString();
    document.cookie = title + "=" + signature + ";" + expires + ";path=/";