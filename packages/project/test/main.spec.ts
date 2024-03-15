/* eslint-disable @typescript-eslint/no-unused-vars */
import { foobar, quadruple, somethingElse } from "@rjwebb/test-project"
import { double } from "@rjwebb/other-project-cjs"
import { square } from "../../other-project-cjs/src/other"
import { expect } from "chai"


describe("main", () => {
  it("should call some code we imported", async () => {
    expect(foobar()).to.equal(10)
  })

  it("should call some code we imported that used an ESM module", async () => {
    expect(await somethingElse()).to.equal("SIWESigner")
  })

  it("should be able to import an ESM module from inside the test", async () => {
    const ipldDagJson = await import("@ipld/dag-json")
    console.log(ipldDagJson.encode("hello world"))
  })

  it("should be able to import from a commonjs module in this repo", async () => {
    expect(double(2)).to.equal(4)
  })

  it("should be able to call a function that uses code from a commonjs module in this repo", async () => {
    expect(quadruple(2)).to.equal(8)
  })

  it("should maybe? be able to import from a commonjs module in another repo via path", async () => {
    expect(square(3)).to.equal(9)
  })
})
