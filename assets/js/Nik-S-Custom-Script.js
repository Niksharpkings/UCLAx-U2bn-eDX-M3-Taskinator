let uri = document.documentURI;
    document.getElementById("locationDocument").innerHTML = uri;

    let documentURL = document.URL;
    document.getElementById("URL").innerHTML = documentURL;

    let base = document.baseURI;
    document.getElementById("baseURL").innerHTML = base;

    function myFunction() {
      const element = document.activeElement.tagName;
      document.getElementById("activeElement").innerHTML = element;
    }
    const view = document.defaultView;
    let width = view.innerWidth;
    let height = view.innerHeight;
document.getElementById("widthNheight").innerHTML = width + "x" + height;
document.getElementById("lastupdate").innerHTML = document.lastModified;
document.getElementById("dhbinfo").innerHTML = "Page hostname is: <br>" + window.location.hostname;
document.getElementById("dhbinfo2").innerHTML = "The full URL of this page is: <br>" + window.location.href;
document.getElementById("dhbinfo3").innerHTML = "The current Page path your on is: <br>" + window.location.pathname;
document.getElementById("dhbinfo4").innerHTML = "The window. location page protocol is: <br>" + window.location.protocol;
document.getElementById("dhbinfo5").innerHTML ="Is your cookie Enabled: <br>" + navigator.cookieEnabled;
document.getElementById("dhbinfo6").innerHTML = "Your Browser Name is: <br>" + navigator.appCodeName;
document.getElementById("dhbinfo7").innerHTML = "Your Browser engine is <br>" + navigator.product;
document.getElementById("dhbinfo8").innerHTML = "Your Browser version information is: <br>" + navigator.appVersion;
document.getElementById("dhbinfo9").innerHTML = "Your Browser sent navigator user-agent header (operating system) is: <br>" +  navigator.userAgent;
document.getElementById("dhbinfo10").innerHTML = "Your Browser navigator platform (operating system) is: <br>" + navigator.platform;
document.getElementById("dhbinfo11").innerHTML = "Your Browser navigator language is: <br>" + navigator.language;
document.getElementById("dhbinfo12").innerHTML = "Is your java enabled right now: <br>" + navigator.javaEnabled();