const jsdom = require("jsdom");
const { JSDOM } = jsdom;


function normalizeUrl(urlString) {
  const urlObj = new URL(urlString);
  const hostName = urlObj.hostname
  const normalUrl = hostName.toLowerCase() + (urlObj.pathname).toLowerCase()

  if (normalUrl.slice(-1) == "/") {
    return normalUrl.slice(0, -1);


  }


  return normalUrl
}


function getURLFromHtml(htmlBody, baseUrl) {
  const urls = []
  const dom = new JSDOM(htmlBody)
  let linkElements = dom.window.document.querySelectorAll("a")
  for (const linkElement of linkElements) {
    if (linkElement.href.slice(0, 1) === "/") {
      //relative
      try {

        const urlObj = new URL(`${baseUrl}${linkElement.href}`)
        urls.push(urlObj.href)
      } catch (err) {
        console.log(`error in the relative url ${err.message}`)
      }
    }
    else {
      //absolute
      try {
        const urlObj = new URL(linkElement.href)
        urls.push(urlObj.href)
      } catch (err) {

      }
    }
  }

  console.log(urls)
  return urls

}
module.exports = { normalizeUrl, getURLFromHtml }
