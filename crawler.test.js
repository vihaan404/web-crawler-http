const { normalizeUrl } = require("./crawler.js")
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


