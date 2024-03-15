/* eslint-disable @typescript-eslint/no-unused-vars */
import { foobar, somethingElse } from "@rjwebb/test-project"
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
})
