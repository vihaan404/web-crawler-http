const { normalizeUrl, getURLFromHtml } = require("./crawler.js")
const { test, expect } = require("@jest/globals")

test("normalizeUrl", () => {
  const input = "http://blog.boot.dev/path"
  const actual = normalizeUrl(input)
  const expected = "blog.boot.dev/path"

  expect(actual).toEqual(expected)
})


test("normalizeUrl strip trailing / ", () => {
  const input = "http://blog.boot.dev/path/"
  const actual = normalizeUrl(input)
  const expected = "blog.boot.dev/path"

  expect(actual).toEqual(expected)
})


test("normalizeUrl capitals", () => {
  const input = "http://Blog.boot.dev/path/"
  const actual = normalizeUrl(input)
  const expected = "blog.boot.dev/path"

  expect(actual).toEqual(expected)
})


test("normalizeUrl", () => {
  const input = "http://blog.boot.dev/path/"
  const actual = normalizeUrl(input)
  const expected = "blog.boot.dev/path"

  expect(actual).toEqual(expected)
})


test("getURLFromHtml asbolute", () => {

  const inputFirst = '<a href="https://boot.dev">Learn Backend Development</a>'
  const inputSecond = 'https://boot.dev'
  const actual = getURLFromHtml(inputFirst, inputSecond)
  const expected = ["https://boot.dev/"]


  expect(actual).toEqual(expected)
})



test("getURLFromHtml relative", () => {

  const inputFirst = '<a href="/blog">Learn Backend Development</a>'
  const inputSecond = 'https://boot.dev'
  const actual = getURLFromHtml(inputFirst, inputSecond)
  const expected = ["https://boot.dev/blog"]

  expect(actual).toEqual(expected)
})




test("getURLFromHtml invalid", () => {

  const inputFirst = '<a href="/blog">Learn Backend Development</a>'
  const inputSecond = 'invalid'
  const actual = getURLFromHtml(inputFirst, inputSecond)
  const expected = []

  expect(actual).toEqual(expected)
})





test("normalizeUrl", () => {
  const input = "http://blog.boot.dev/path/"
  const actual = normalizeUrl(input)
  const expected = "blog.boot.dev/path"

  expect(actual).toEqual(expected)
})


