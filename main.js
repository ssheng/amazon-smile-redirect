chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url == "https://www.amazon.com/")
      return {
        redirectUrl: "https://smile.amazon.com/"
      };
    },
  { urls: ["*://www.amazon.com/*"] },
  ["blocking"]);