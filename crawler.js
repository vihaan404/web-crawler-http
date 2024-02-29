function normalizeUrl(urlString) {
  const urlObj = new URL(urlString);
  const hostName = urlObj.hostname
  const normalUrl = hostName.toLowerCase() + (urlObj.pathname).toLowerCase()

  if (normalUrl.slice(-1) == "/") {
    return normalUrl.slice(0, -1);


  }


  return normalUrl
}

module.exports = {
  normalizeUrl

}
