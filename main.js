chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	var regex = /^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/;
  	var matcher = details.url.match(regex);
  	var domain = matcher[1];
  	console.log("domain: " + domain);
    if (domain == "www.amazon.com") {
      var redirect = details.url.replace(regex, "https://smile.amazon.com")
      return {
        redirectUrl: redirect
      };
    };
  },
  { urls: ["*://www.amazon.com/*"] },
  ["blocking"]);